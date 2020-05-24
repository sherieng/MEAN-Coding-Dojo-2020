import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createAuthor(newAuthor){
    return this._http.post('/authors', newAuthor)
  }

  createQuote(newAuthor, authorId){
    return this._http.post('/authors/'+authorId+ '/quote', newAuthor)
  }

  showAuthors(){
    return this._http.get('/authors')
  }

  showAnAuthor(id){
    return this._http.get('/authors/' +id)
  }

  upVote(quoteId, authorId){
    return this._http.put('/authors/'+authorId+ '/voteup', quoteId)
  }

  downVote(quoteId, authorId){
    return this._http.put('/authors/'+authorId+ '/votedown', quoteId)
  }

  deleteAuthor(id){
    return this._http.delete('/authors/' +id)
  }

  deleteQuote(quoteId,authorId){
    return this._http.delete(`/authors/${authorId}/quotes/${quoteId}`)
  }


  updateAuthor(id, updateData){
    return this._http.put('/authors/' +id, updateData)
  }
}
