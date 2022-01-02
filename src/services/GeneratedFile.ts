import { saveAs } from 'file-saver';

export class FileService {
  saveFile(fileName: string, text: any) {
    console.log("text", text, "file-", fileName)
    let file = new File(text, fileName, {type: "text/plain;charset=utf-8"});
    saveAs(file);
  }
}

