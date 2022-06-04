import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { UploadServiceService } from 'src/app/services/upload-service.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  ngOnInit(): void {}

  file: any;

  constructor(private uploadService: UploadServiceService) {}

  onFilechange(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
  }

  upload() {
    if (this.file) {
      this.uploadService.uploadfile(this.file).subscribe((resp) => {
        alert('Uploaded');
      });
    } else {
      alert('Please select a file first');
    }
  }
}
