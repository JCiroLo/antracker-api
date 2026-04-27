import supabase from "@lib/supabase";

async function migrate() {
  console.log("🚀 Starting migration...");

  const { data: expenseTemplates } = await supabase.from("expense_templates").select("*");

  const { data: incomeTemplates } = await supabase.from("income_templates").select("*");

  const templateMap = new Map<string, string>();

  for (const t of expenseTemplates || []) {
    const { data } = await supabase
      .from("transaction_templates")
      .insert({
        original_id: t.id,
        type: "expense",
        title: t.title,
        amount: t.amount,
        user_id: t.user_id,
        created_at: t.created_at,
        category_id: t.category_id,
        is_single_payment: t.is_single_payment,
        frequency_value: t.frequency_value,
        frequency_unit: t.frequency_unit,
        start_date: t.start_date,
      })
      .select("id")
      .single();

    if (data) templateMap.set(t.id, data.id);
  }

  for (const t of incomeTemplates || []) {
    const { data } = await supabase
      .from("transaction_templates")
      .insert({
        original_id: t.id,
        type: "income",
        title: t.title,
        amount: t.amount,
        user_id: t.user_id,
        created_at: t.created_at,
        category_id: t.category_id,
        is_single_payment: t.is_single_payment,
        frequency_value: t.frequency_value,
        frequency_unit: t.frequency_unit,
        start_date: t.start_date,
      })
      .select("id")
      .single();

    if (data) templateMap.set(t.id, data.id);
  }

  console.log("✅ Templates migrated");

  const { data: expenseRecords } = await supabase.from("expense_records").select("*");

  const { data: incomeRecords } = await supabase.from("income_records").select("*");

  const recordsToInsert = [];

  for (const r of expenseRecords || []) {
    const newTemplateId = templateMap.get(r.template_id);
    if (!newTemplateId) continue;

    recordsToInsert.push({
      template_id: newTemplateId,
      user_id: r.user_id,
      created_at: r.created_at,
      category_id: r.category_id,
      amount: r.amount,
      title: r.title,
      times: r.times,
      paid_date: r.paid_date,
    });
  }

  for (const r of incomeRecords || []) {
    const newTemplateId = templateMap.get(r.template_id);
    if (!newTemplateId) continue;

    recordsToInsert.push({
      template_id: newTemplateId,
      user_id: r.user_id,
      created_at: r.created_at,
      category_id: r.category_id,
      amount: r.amount,
      title: r.title,
      times: r.times,
      paid_date: r.paid_date,
    });
  }

  const chunkSize = 500;

  for (let i = 0; i < recordsToInsert.length; i += chunkSize) {
    const chunk = recordsToInsert.slice(i, i + chunkSize);

    await supabase.from("transaction_records").insert(chunk);
  }

  console.log("✅ Records migrated");

  console.log("🎉 Migration completed successfully");
}

export { migrate };
