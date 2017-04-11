﻿import { URound } from './uround';
import { UUser } from './uuser';

export class UDuel {
    Id: number;
    PrimaryPlayerId: string;
    PrimaryPlayer: UUser;
    SecondaryPlayerId: string;
    SecondaryPlayer: UUser;
    URounds: URound[];
}