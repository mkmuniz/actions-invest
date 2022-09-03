import express from 'express';
import StartupService from './service';

export async function getAllStartups(req: express.Request, res: express.Response) {
    const startup = await StartupService.getAllStartups();

    res.status(200).send(startup);
};

export async function getOneStartup(req: express.Request, res: express.Response) {
    const startup = await StartupService.getAllStartups();

    res.status(200).send(startup);
};

export async function insertOneStartup(req: express.Request, res: express.Response) {
    const startup = await StartupService.getAllStartups();

    res.status(200).send(startup);
};

export async function deleteOneStartup(req: express.Request, res: express.Response) {
    const startup = await StartupService.getAllStartups();

    res.status(200).send(startup);
};