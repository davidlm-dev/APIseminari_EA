import { Request, Response } from "express";
import * as subjectService from "./subject_service.js";

export const createSubject = async (req: Request, res: Response) => {
    try {
        const subject = await subjectService.createSubject(req.body);
        res.status(201).json(subject);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllSubjects = async (req: Request, res: Response) => {
    try {
        const subjects = await subjectService.getAllSubjects();
        res.status(200).json(subjects);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

export const getSubjectById = async (req: Request, res: Response) => {
    try {
        const subject = await subjectService.getSubjectById(req.params.id);
        if (!subject) {
            return res.status(404).json({ message: "Subject not found" });
        }
        res.status(200).json(subject);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateSubject = async (req: Request, res: Response) => {
    try {
        await subjectService.updateSubject(req.params.id, req.body);
        res.status(200).json({ message: "Subject updated" });
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteSubject = async (req: Request, res: Response) => {
    try {
        await subjectService.deleteSubject(req.params.id);
        res.status(200).json({ message: "Subject deleted" });
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAlumniBySubject = async (req: Request, res: Response) => {
    try {
        const subject = await subjectService.getAlumniBySubject(req.params.id);
        if (!subject) {
            return res.status(404).json({ message: "Subject not found" });
        }
        res.status(200).json(subject.alumni);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};
