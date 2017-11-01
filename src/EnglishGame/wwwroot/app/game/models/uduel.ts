import { URound } from './uround';
import { UUser } from './uuser';

export class UDuel {
    Id: number;
    USubjectId: number;
    PrimaryPlayerId: string;
    PrimaryPlayer: UUser;
    SecondaryPlayerId: string;
    SecondaryPlayer: UUser;
    Summary: string;
    URounds: URound[];
}