import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    { 
      title: 'Why is the sky blue', 
      content: 'That\'s why!' 
    },
    {
      title: 'What does an orange taste like?',
      content: 'An orange tastes like an orange!'
    },
    {
      title: 'What color is a banana?',
      content: 'A banana is yellow!'
    }
  ]  

  onClick(){
    this.modalOpen = !this.modalOpen;
  }
}
