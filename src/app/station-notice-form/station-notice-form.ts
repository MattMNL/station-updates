import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { Station } from '../stations.model';
import { form, FormField, minLength, required } from '@angular/forms/signals';
import { DatePipe, TitleCasePipe } from '@angular/common';

type NoticeType = 'disruption' | 'information' | 'service';

interface NoticeModel {
  title: string;
  date: string;
  type: NoticeType | '';
  description: string;
}

@Component({
  imports: [FormField, DatePipe, TitleCasePipe],
  selector: 'station-notice-form',
  styleUrl: './station-notice-form.scss',
  templateUrl: './station-notice-form.html',
})
export class StationNoticeForm {
  private readonly stationNoticeDialog =
    viewChild.required<ElementRef<HTMLDialogElement>>('stationNoticeDialog');

  private readonly initial: NoticeModel = {
    title: '',
    date: '',
    type: '',
    description: '',
  };

  noticeModel = signal<NoticeModel>({ ...this.initial });

  noticeForm = form(this.noticeModel, (path) => {
    required(path.title, { message: 'Title is required.' });
    minLength(path.title, 3, { message: 'Title needs at least 3 characters.' });
    required(path.date, { message: 'Pick a date.' });
    required(path.type, { message: 'Choose a type.' });
    required(path.description, { message: 'Description is required.' });
    minLength(path.description, 10, {
      message: 'Please give a bit more detail (10+ characters).',
    });
  });

  submitted = signal<NoticeModel | null>(null);

  station = input.required<Station>();

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.noticeForm().invalid()) return;

    const value = this.noticeModel();

    this.submitted.set(value);
    this.stationNoticeDialog().nativeElement.showModal();
  }

  onDialogClick(event: MouseEvent) {
    if (event.target === this.stationNoticeDialog().nativeElement) {
      this.noticeModel.set({ ...this.initial });
      this.stationNoticeDialog().nativeElement.close();
    }
  }
}
