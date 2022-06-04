import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadServiceService {
  constructor(private httpClient: HttpClient) {}

  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file);
    return this.httpClient.post('http://localhost:9091/uploadFile', formParams);
  }
}
