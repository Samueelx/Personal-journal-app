import { Router } from "express";
import { createJournalEntry, getJournalEntries, updateJournalEntry, deleteJournalEntry } from '../controllers/journalController';
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.post("/", authenticateToken, createJournalEntry);
router.get("/", authenticateToken, getJournalEntries);
router.put("/:id", authenticateToken, updateJournalEntry);
router.delete("/:id", authenticateToken, deleteJournalEntry);

export default router;