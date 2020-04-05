import { Component, OnInit } from '@angular/core';
//import { CommentsService } from '../services/comments.service';
import { HttpClient } from '@angular/common/http';


class Post{
    constructor(
        public postId:number,
        public id:number,
        public name:string,
        public email: string,
        public body: string
    ){}
}



@Component({
  selector: 'app-comment',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {
    
    apiUrl:string='https://jsonplaceholder.typicode.com/comments';
    data=[];

    
    loading:boolean=false;
    hello:any;

    constructor(private httpClient: HttpClient){}

    ngOnInit(){
        this.loading=true;
        this.fetchData()
        .then(() => {
            this.loading=false;
        })
        
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
