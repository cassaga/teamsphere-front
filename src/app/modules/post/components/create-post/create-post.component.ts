import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  @Output() closeModal = new EventEmitter<void>();

  closeModalEvent() {
    this.closeModal.emit();
  }

}
