import { Component, OnInit, Input } from '@angular/core';
import { Result } from './result.model';
import { ElasticService } from '../../services/elastic.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public searchText: string;
  @Input() listResults: Array<Array<Result>> = [];


  constructor(public elasticService : ElasticService) {
   }

  ngOnInit() {
  }

  private parseResult (hit: any):  Array<Result> {
    const arrayResult : Array<Result> = [];
    if ((hit._source as any).shareClassName) {
      arrayResult.push(new Result('share-class', '/share-class/' + hit._id, (hit._source as any).shareClassName, hit._id));
    }
    if ((hit._source as any).legalFundName) {
      arrayResult.push(new Result('legal-fund', '/legal-fund/' + ((hit._source as any).legalFund || hit._id), ((hit._source as any).legalFundName), ((hit._source as any).legalFund || hit._id)));
    }
    if ((hit._source as any).promoterName) {
      arrayResult.push(new Result('promoter', '/promoter/' + ((hit._source as any).promoter || hit._id), ((hit._source as any).promoterName), ((hit._source as any).promoter || hit._id)));
    }
    return arrayResult;
  }
  searchResults() {

    const searchBody = {
      'query': {
        'multi_match': {
          'query': this.searchText,
          'type':  'most_fields',
          'tie_breaker': 1,
          'fields': ['promoterName', 'legalFundName', 'shareClassName']
        }
      }
    };

    this.elasticService.searchBody(searchBody).subscribe(
      (results) => {
        this.listResults = [];
        results.hits.hits.map((hit) => {
          return this.listResults.push(this.parseResult(hit));
        });
      });

  }

}
