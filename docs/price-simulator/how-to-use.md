# How to Use

### Configuration Settings

1. **Adjust Core Sale Parameters**: In the sidebar, under 'Configuration Settings', use the sliders to set parameters like interlude length, leadin length, region length, ideal bulk proportion, limit of cores offered, and the renewal bump amount.

<img src="./img/config.png" alt="config" style="width: 40%;" />
<img src="./img/const-sold.png" alt="const sold" style="width: 40%;" />


![info hover](./img/info-hover.png)
<img src="./img/leadin-curve.png" alt="leadin curve" style="width: 40%;" />
<img src="./img/sale-settings.png" alt="salesettings" style="width: 40%;" />

2. **Parameter Insights**:
   - `Interlude Length`: A period for renewals, allowing priority to existing tasks.
   - `Leadin Length`: A dynamic pricing phase where prices descend to the sale price, reflecting a demand-driven model.
   - `Region Length`: Duration of core allocation for each sale, representing the bulk period in Agile Coretime.
   - `Ideal Bulk Proportion`: Target ratio of cores for stable pricing if `cores_sold > ideal_bulk_cores` then prices rises `else` it falls.
   - `Limit Cores Offered`: Cap on cores available per sale, a critical market equilibrium factor.
   - `Renewal Bump`: Incremental price increase for renewals, supporting long-term planning.

### Sale Settings

1. **Set Observing Time**: Use the 'X-AXIS - Observing time' slider to set the number of regions you want to observe.

2. **Initial Core Pricing**: Set the 'Y-AXIS - Start Price of the Core You Bought' and 'Y-AXIS Starting Price' to establish the initial core prices.

3. **Adjust Leadin Curve**: Expand the 'Change the Leadin period curve' section to toggle between linear and exponential curves and adjust the factor value.

4. **Core Sales Configuration**:
   - Toggle between constant and variable sales across regions.
   - For constant sales, set the number of cores renewed and sold in each sale.
   - For variable sales, adjust the number of cores renewed and sold for each region.

<img src="./img/var-sold1.png" alt="variable sold 1" style="width: 40%;" />

![variable sold 2](./img/var-sold2.png)


### Visualization

- The application visualizes the sale price over time on a graph based on your configured settings.
- Key periods like Interlude, Leadin, and Region are marked on the graph for easy understanding.

## Interacting with the Graph

- Observe how changes in settings impact the sale price graph in real time.
- Hover over the graph to see specific data points and trends.

## Conclusion

The Lastic Sale Price Simulator is a powerful tool for understanding and analyzing core sale dynamics. Experiment with different settings to see how they impact the overall sale strategy.
