
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "generic-modal",
  templateUrl: "./generic-modal.component.html",
  styleUrls: ["./generic-modal.component.scss"]
})
export class GenericModalComponent implements OnInit {
  public isGenericModalShowing: boolean;
  @Input()
  modalTitle: string;
  @Input()
  isLarge: boolean;
  @Input()
  set isShowingModal(_isShowingModal: boolean) {
    this.isGenericModalShowing = _isShowingModal;
    if (_isShowingModal) {
      $("body").addClass("hide-scroll-bars");
    } else {
      $("body").removeClass("hide-scroll-bars");
    }
  }
  @Output()
  modalShowChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  closeModal() {
    this.modalShowChange.emit(false);
  }

  dontCloseModal(e) {
    e.stopPropagation();
  }
}
