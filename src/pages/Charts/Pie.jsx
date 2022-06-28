import React from 'react';
import { Header } from '../../components';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
  Legend,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel,
} from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Tooltip } from '@syncfusion/ej2-react-popups';

const Pie = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Inflation by Category' />
      <AccumulationChartComponent
        id='pie-chart'
        height='420px'
        chartArea={{
          border: { width: 0 },
        }}
        legendSettings={{
          title: 'Categories',
          titleStyle: {
            fontWeight: 'bold',
          },
          position: 'Left',
        }}
        background={currentMode === 'Dark' ? '#33373e' : '#fff'}>
        <Inject
          services={[
            AccumulationLegend,
            PieSeries,
            AccumulationTooltip,
            AccumulationDataLabel,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            xName='x'
            yName='y'
            explode
            explodeOffset='10%'
            dataLabel={{
              visible: true,
              position: 'Outside',
              name: 'text',
              font: {
                fontWeight: '600',
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
