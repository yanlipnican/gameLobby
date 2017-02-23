import { Component, OnInit, ElementRef, Input, ViewEncapsulation, OnChanges } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.less'],
  encapsulation : ViewEncapsulation.None
})
export class ChartsComponent implements OnInit, OnChanges {

  @Input() width: number = 1200;
  @Input() height: number = 600;

  svg;

  source1 = [
    {a: '1', b: '4'},
    {a: '2', b: '3'},
    {a: '3', b: '5'},
    {a: '4', b: '6'},
    {a: '5', b: '7'},
    {a: '6', b: '8'},
    {a: '7', b: '6'},
    {a: '8', b: '2'},
  ];

  source2 = [
    {a: '8', b: '4'},
    {a: '7', b: '3'},
    {a: '6', b: '5'},
    {a: '5', b: '6'},
    {a: '4', b: '7'},
    {a: '3', b: '8'},
    {a: '2', b: '6'},
    {a: '1', b: '2'},
  ];

  data = this.source1;

  currentDot;
  whichData = false;

  constructor(private element: ElementRef) {

    let el = this.element.nativeElement;
    this.svg = d3.select(el).append('svg');

  }

  showData(dot){
    return () => {
      this.currentDot = dot;
    }
  }

  switch(){
    this.whichData = !this.whichData;
    delete this.currentDot;
    this.render();
  }

  ngOnInit() {
    this.render();
  }

  ngOnChanges(){
    this.render();
    console.log('changes');
  }

  render() {
    this.svg.selectAll('*').remove();
    this.svg.attr('width', this.width);
    this.svg.attr('height', this.height);
    let margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = +this.svg.attr('width') - margin.left - margin.right;
    let height = +this.svg.attr('height') - margin.top - margin.bottom;
    let g = this.svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

    let parseTime = d3.timeParse('%d-%b-%y');

    let x = d3.scaleTime()
      .rangeRound([0, width]);

    let y = d3.scaleLinear()
      .rangeRound([height, 0]);

    let line = d3.line()
      .x(function (d: any) { return x(d.a); })
      .y(function (d: any) { return y(d.b); });


    let data = this.whichData ? this.source1 : this.source2;

    x.domain(d3.extent(data, function (d:any) { return d.a; }));
    y.domain(d3.extent(data, function (d:any) { return d.b; }));

    g.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .select('.domain')
      .remove();

    g.append('g')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Price ($)');

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'crimson')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    for(let key in data){
      if(data[key].a){
        let dot:any = data[key];
        g.append('circle')
        .attr('class', 'point')
        .attr('cx', x(dot.a))
        .attr('cy', y(dot.b))
        .attr('r', 5)
        .attr('fill', 'blue')
        .on('click', this.showData(dot));
      }
    }

  }

}
