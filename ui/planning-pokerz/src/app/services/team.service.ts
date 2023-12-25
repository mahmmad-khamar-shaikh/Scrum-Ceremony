import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { ITeams } from '../types/shared.interface';
import { DALService } from './dal.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private dalServiceRef: DALService<ITeams>,
    private angularFirestoreService: AngularFirestore
  ) {
  }
  get getTeamCollection(): AngularFirestoreCollection<ITeams> {
    const teamPath = 'Teams';
    return this.dalServiceRef.getCollection(teamPath);
  }
  public addTeam(teamName: string): Promise<DocumentReference> {
    return this.angularFirestoreService.collection<any>('Teams').add({
      teamName: teamName
    });
  }
  public checkTeamExists(teamName : string):AngularFirestoreCollection<any>{
    return this.angularFirestoreService.collection('Teams', ref=>{
      return ref
      .where('teamName','==',teamName)
    });
  }
}
