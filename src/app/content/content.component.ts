import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  title: string = 'This is the content section';
  description: string = 'This section is used to display content using one-way binding.';

   // Properties for property binding
   isDisabled: boolean = true;  // To control the disabled state of a button
   imgSrc: string = 'https://via.placeholder.com/150';  // Dynamic image source
   imgAlt: string = 'Placeholder image';  // Dynamic alt text for the image
   buttonText: string = 'Button Disabled!';  // Button text that can change dynamically
   toggleButton() {
    this.isDisabled = !this.isDisabled;
    this.buttonText = this.isDisabled ? 'Button Disabled!' : 'Button Enabled!';
  }

  // Event binding property to hold message when the button is clicked for 
  message: string = '';
  messages: string = '';
  // Method to be called when the button is clicked
  onButtonClick() {
    this.message = 'Button was clicked!';
  }

  onKeyUp(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.messages = `You typed: ${inputElement.value}`;
  }

  // Define an object with some properties
  book = {
    title: 'Angular for Beginners',
    author: 'John Doe',
    year: 2024
  };

}
