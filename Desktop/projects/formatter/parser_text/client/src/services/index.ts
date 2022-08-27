import { FileService } from "./FileService";
import { SubtitleService } from "./SubtitlesService";
import { TranslateService } from "./Translate";

export const fileService = new FileService(); 
export const translateService = new TranslateService(); 
export const subtitleService = new SubtitleService();  
