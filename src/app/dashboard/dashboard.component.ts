import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  title = "Games Arena";
  private jsonUrl = "assets/json/gamesext.json";
  games: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllGames();
  }
  /**
   * Get games extenstions
   */
  public getJSON(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
  /**
   * Get all games data
   */
  getAllGames() {
    this.getJSON().subscribe(data => {
      this.games = data;
    });
  }
}
