const Task = require("../models/Task");

function ok(res, data, message = "OK") {
  return res.json({ success: true, message, data });
}

function fail(statusCode, message) {
  const err = new Error(message);
  err.statusCode = statusCode;
  return err;
}

async function createTask(req, res) {
  const { title, description, status, dueDate } = req.body;

  if (!title || String(title).trim() === "") {
    throw fail(400, "title is required");
  }

  const doc = await Task.create({
    title: String(title).trim(),
    description: description ? String(description).trim() : "",
    status: status || "pending",
    dueDate: dueDate ? new Date(dueDate) : null
  });

  return ok(res, doc, "Created");
}

async function getTasks(req, res) {
  const { status } = req.query;

  const filter = {};
  if (status) filter.status = status;

  const docs = await Task.find(filter).sort({ updatedAt: -1 });
  return ok(res, docs, "OK");
}

async function getTaskById(req, res) {
  const { id } = req.params;

  const doc = await Task.findById(id);
  if (!doc) throw fail(404, "Task not found");

  return ok(res, doc, "OK");
}

async function updateTask(req, res) {
  const { id } = req.params;

  const payload = {};
  if (req.body.title !== undefined) {
    const t = String(req.body.title).trim();
    if (!t) throw fail(400, "title cannot be empty");
    payload.title = t;
  }
  if (req.body.description !== undefined) payload.description = String(req.body.description).trim();
  if (req.body.status !== undefined) payload.status = req.body.status;
  if (req.body.dueDate !== undefined) payload.dueDate = req.body.dueDate ? new Date(req.body.dueDate) : null;

  const doc = await Task.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
  if (!doc) throw fail(404, "Task not found");

  return ok(res, doc, "Updated");
}

async function deleteTask(req, res) {
  const { id } = req.params;

  const doc = await Task.findByIdAndDelete(id);
  if (!doc) throw fail(404, "Task not found");

  return ok(res, doc, "Deleted");
}

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
};
