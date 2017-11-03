import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { UTask } from '../models/utask';
import { UPupil } from '../models/upupil';
import { UExercise } from '../models/uexercise';
import { UScheduleItem } from '../models/uscheduleitem';

import { MockUp } from '../mockup/mockup';

@Injectable()
export class WorkbookService {

    constructor(private http: Http) { }

    getTaskList(): Promise<UTask[]> {
        return Promise.resolve()
            .then(response =>
            {
                return MockUp.tasks;
            });
    }

    getPupilList(): Promise<UPupil[]> {
        return Promise.resolve()
            .then(response => {
                return MockUp.pupils;
            });
    }

    getExerciseList(): Promise<UExercise[]> {
        return Promise.resolve()
            .then(response => {
                return MockUp.exercises;
            });
    }

    getScheduleItemList(): Promise<UScheduleItem[]> {
        return Promise.resolve()
            .then(response => {
                return MockUp.schedule;
            });
    }
}