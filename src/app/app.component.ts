import { Component } from '@angular/core';

interface Task {
  id: string;
  question: string;
  done: boolean;
  isExercise?: boolean;
  code?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Lesson metadata
  lessonNumber = 6;
  lessonTotal = 12;
  title = 'Components & props';
  brief =
    'Components let you split the UI into independent, reusable pieces. ' +
    'Props pass data into them so the same component can render different content.';
  duration = '~15 min';
  level = 'Beginner';
  xp = 40;
  courseProgress = 42;

  // Mobile only: the brief collapses into an accordion
  briefOpen = false;

  // Where the example component appears in this very application.
  // The lesson teaches a concept by pointing at the running platform.
  appearsIn = ['Dashboard grid', 'Course sidebar', 'Saved list'];

  tasks: Task[] = [
    { id: 'Q1', question: 'What does a component return?', done: false },
    { id: 'Q2', question: 'How do you pass a prop into a component?', done: false },
    { id: 'Q3', question: 'Build a', code: '<Badge/>', done: false, isExercise: true },
  ];

  completed = false;

  get doneCount(): number {
    return this.tasks.filter((t) => t.done).length;
  }

  get allDone(): boolean {
    return this.doneCount === this.tasks.length;
  }

  toggleTask(task: Task): void {
    task.done = !task.done;
    if (!this.allDone) {
      this.completed = false;
    }
  }

  markComplete(): void {
    if (this.allDone) {
      this.completed = true;
    }
  }

  toggleBrief(): void {
    this.briefOpen = !this.briefOpen;
  }
}