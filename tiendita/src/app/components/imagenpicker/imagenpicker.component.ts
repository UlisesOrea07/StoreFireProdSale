import { Component, OnInit } from "@angular/core";
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";
@Component({
  selector: "app-imagenpicker",
  templateUrl: "./imagenpicker.component.html",
  styleUrls: ["./imagenpicker.component.scss"],
})
export class ImagenpickerComponent implements OnInit {
  constructor(private imagePicker: ImagePicker) {}

  ngOnInit() {}
  pickImage() {
    var options: ImagePickerOptions = {
      maximumImagesCount: 1,
      width: 100,
      height: 100,
    };
    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          console.log("Image URI: " + results[i]);
        }
      },
      (err) => {}
    );
  }
}
