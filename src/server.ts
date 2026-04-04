import app from "./app";

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📡 Available endpoints:`);
  console.log(`   GET/POST        /api/expense_templates`);
  console.log(`   GET/PUT/DELETE  /api/expense_templates/:id`);
  console.log(`   GET/POST        /api/expense_records`);
  console.log(`   GET/PUT/DELETE  /api/expense_records/:id`);
  console.log(`   GET/POST        /api/income_templates`);
  console.log(`   GET/PUT/DELETE  /api/income_templates/:id`);
  console.log(`   GET/POST        /api/income_records`);
  console.log(`   GET/PUT/DELETE  /api/income_records/:id`);
  console.log(`   GET/POST        /api/users`);
  console.log(`   GET/PUT/DELETE  /api/users/:id`);
});
