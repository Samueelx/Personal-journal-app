import { Request, Response } from "express";
import { JournalEntry } from "../models/journalEntryModel";

export const createJournalEntry = async(req: Request, res: Response) => {
    const {title, content, categoryId, date} = req.body;
    //@ts-ignore
    const userId = req.userId;

    try {
        const journalEntry = await JournalEntry.create({userId, title, content, categoryId, date});
        res.status(201).json(journalEntry);
    } catch (error) {
        res.status(500).json({error: 'Failed to create journal entry'});
    }
};

export const getJournalEntries = async (req: Request, res: Response) => {
    //@ts-ignore
    const userId = req.userId;

    try {
        const journalEntries = await JournalEntry.findAll({where: {userId}});
        res.json(journalEntries);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch journal entries'});
    }
};
export const getJournalEntryById = async(req: Request, res: Response) => {
    const {id} = req.params;
    //@ts-ignore
    const userId = req.userId;

    try {
        const journalEntry = await JournalEntry.findOne({where: {id, userId}});
        if(!journalEntry){
            res.status(404).json({error: 'Journal Entry not found!'});
        }
        res.json(journalEntry);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch journal entry'});
    }
}


export const updateJournalEntry = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {title, content, categoryId, date} = req.body;
    console.log("Fetched the data");
    //@ts-ignore
    const userId = req.userId;

    try {
        const journalEntry = await JournalEntry.findOne({where: {id, userId}});

        if(!journalEntry){
            console.log("Couldn't find that specific entry with ID: ", id);
            return res.status(404).json({error: 'Journal entry not found'});
        }

        journalEntry.title = title;
        journalEntry.content = content;
        journalEntry.categoryId = categoryId;
        journalEntry.date = date;
        console.log("Updated journalEntry");

        await journalEntry.save();
        res.json(journalEntry);
    } catch (error) {
        res.status(500).json({error: 'Failed to update journal entry'});
    }
};

export const deleteJournalEntry = async(req: Request, res: Response) => {
    const {id} = req.params;
    //@ts-ignore
    const userId = req.userId;

    try {
        const journalEntry = await JournalEntry.findOne({where: {id, userId}});
        if(!journalEntry)
            return res.status(404).json({error: 'Journal Entry not found'});

        await journalEntry.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: 'failed to delete journal entry!'});
    }
}