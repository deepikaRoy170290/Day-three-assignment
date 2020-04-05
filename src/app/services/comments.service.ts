import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';

class Post{
    constructor(
        public postId:number,
        public id:number,
        public name:string,
        public email: string,
        public body: string
    ){}
}


@Injectable({
    providedIn: 'root'
})
export class CommentsService {
    apiUrl:string='https://jsonplaceholder.typicode.com/comments';
    data=[];

    constructor(private httpClient: HttpClient) {
        //this.results = [];
      //  this.loading = false;
        //this.fetchData();
     }
   
    public fetchData(){
        const promise1 = new Promise((resolve, reject) => {
            const apiURLs = this.apiUrl;
            this.httpClient.get<Post[]>(apiURLs)
            .toPromise()
            .then(
                (res:any) => {
                    //Success
                    this.data = res.map( (res: any) =>{
                        return new Post
                        (
                            res.postId,
                            res.id,
                            res.name,
                            res.email,
                            res.body
                        );
                    });
                    //console.log(this.data);
                    resolve();
                },
                err => {
                    reject(err);
                }
            );
        });
        return promise1;
    }


    }

