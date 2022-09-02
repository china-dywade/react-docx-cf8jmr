import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import { saveAs } from 'file-saver';
import {
  Packer,
  Table,
  TableRow,
  TableCell,
  Paragraph,
  Document,
  WidthType,
  HeadingLevel,
  AlignmentType,
  TextRun,
  Run,
  VerticalAlign,
  BorderStyle,
  TabStopType,
  TabStopPosition,
} from 'docx';
import { experiences, education, skills, achievements } from './cv-data';
import { DocumentCreator } from './cv-generator';

interface AppProps {}
interface AppState {
  name: string;
}
const tableData = [
  {
    type: 'header',
    data: [
      {
        text: '政务云服务核算表',
        heading: HeadingLevel.HEADING_3,
        alignment: AlignmentType.CENTER,
      },
    ],
  },
  {
    type: 'content',
    data: [
      {
        text: '使用单位名称',
      },
      {
        text: '马鞍山市公会',
      },
      {
        text: '云资源服务商',
      },
      {
        text: '电信',
      },
    ],
  },
  {
    type: 'content',
    data: [
      {
        text: '使用单位联系人',
      },
      {
        text: '韦德',
      },
      {
        text: '联系人手机号',
      },
      {
        text: '15821999999',
      },
    ],
  },
  {
    type: 'content',
    data: [
      {
        text: '联系人电子邮箱',
      },
      {
        text: 'hadskk@qq.com',
      },
      {
        text: '联系人座机',
      },
      {
        text: '110',
      },
    ],
  },
  {
    type: 'content',
    data: [
      {
        text: '联系人电子邮箱',
      },
      {
        text: 'hadskk@qq.com',
      },
    ],
  },
];
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  generate(): void {
    // const documentCreator = new DocumentCreator();
    // const doc = documentCreator.create([
    //   experiences,
    //   education,
    //   skills,
    //   achievements,
    // ]);

    const table = new Table({
      width: {
        size: 8535,
        type: WidthType.DXA,
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: '政务云服务核算表',
                  heading: HeadingLevel.TITLE,
                  alignment: AlignmentType.CENTER,
                }),
              ],
              columnSpan: 4,
            }),
          ],
          tableHeader: true,
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: '使用单位名称',
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              children: [new Paragraph('马鞍山市公会')],
            }),
            new TableCell({
              children: [new Paragraph('云资源服务商')],
            }),
            new TableCell({
              children: [new Paragraph('电信')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('使用单位联系人')],
            }),
            new TableCell({
              children: [new Paragraph('韦德')],
            }),
            new TableCell({
              children: [new Paragraph('联系人手机号')],
            }),
            new TableCell({
              children: [new Paragraph('15821576458')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('信息系统名称')],
            }),
            new TableCell({
              children: [new Paragraph('工地地图微信小程序')],
              columnSpan: 3,
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              rowSpan: 5,
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  text: '资源清算清单',
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              children: [
                new Table({
                  rows: [
                    new TableRow({
                      children: [
                        new TableCell({
                          width: {
                            size: 4000,
                            type: WidthType.DXA,
                          },
                          verticalAlign: VerticalAlign.CENTER,
                          // borders: {
                          //   top: {
                          //     style: BorderStyle.WAVE,
                          //     size: 1,
                          //     color: 'fff',
                          //   },
                          //   bottom: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          //   left: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          //   right: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          // },
                          children: [new Paragraph('分类')],
                        }),
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          // borders: {
                          //   top: {
                          //     style: BorderStyle.WAVE,
                          //     size: 1,
                          //     color: 'fff',
                          //   },
                          //   bottom: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          //   left: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          //   right: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          // },
                          children: [new Paragraph('资源名称')],
                        }),
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          // borders: {
                          //   top: {
                          //     style: BorderStyle.WAVE,
                          //     size: 1,
                          //     color: 'fff',
                          //   },
                          //   bottom: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          //   left: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          //   right: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          // },
                          children: [new Paragraph('计算标准')],
                        }),
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          // borders: {
                          //   top: {
                          //     style: BorderStyle.WAVE,
                          //     size: 1,
                          //     color: 'fff',
                          //   },
                          //   bottom: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          //   left: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          //   right: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          // },
                          children: [new Paragraph('数量')],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          width: {
                            size: 4000,
                            type: WidthType.DXA,
                          },
                          verticalAlign: VerticalAlign.CENTER,
                          // borders: {
                          //   top: {
                          //     style: BorderStyle.WAVE,
                          //     size: 1,
                          //     color: 'fff',
                          //   },
                          //   bottom: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          //   left: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          //   right: {
                          //     style: BorderStyle.SINGLE,
                          //     size: 1,
                          //     color: 'transparent',
                          //   },
                          // },
                          children: [new Paragraph('普通云主机（一台')],
                        }),
                      ],
                    }),
                  ],
                }),

                // new Paragraph({
                //   spacing: {
                //     before: 200,
                //   },
                //   text: '分类\t\t\t\t资源名称\t\t\t\t计算标准\t\t\t数量',
                //   // tabStops: [
                //   //   {
                //   //     type: TabStopType.RIGHT,
                //   //     position: TabStopPosition.MAX,
                //   //   },
                //   // ],
                //   // children: [
                //   //   new TextRun({
                //   //     text: `分类\t\t\t\t\t`,
                //   //   }),
                //   //   new TextRun({
                //   //     text: '资源名称\t\t\t',
                //   //   }),
                //   //   new TextRun('计算标准\t\t\t'),
                //   //   new TextRun('数量'),
                //   // ],
                // }),
                // new Paragraph({
                //   text: '普通云主机（一台）\tcpu\t\t\t\t\t450/1g\t\t\t10',
                // }),
              ],
              columnSpan: 3,
              rowSpan: 5,
            }),
          ],
        }),
      ],
    });
    const doc = new Document({
      sections: [
        {
          children: [table],
        },
      ],
    });
    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, 'table.docx');
      console.log('Document created successfully');
    });
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
          <button onClick={this.generate}>Generate CV with docx!</button>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
