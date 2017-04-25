# Json files format description

[jsend](https://labs.omniti.com/labs/jsend) format is used as a base.

Fields are short to save network bandwidth.

## indicators.json

data: Array&lt;IndicatorEntry&gt;

IndicatorEntry

* **id** number, used for i_id in stats json
* **name** string
* **categories** Array&lt;Category&gt;

Category

* **id** number used as c_id in stats json
* **name** string

## ministries_stats.json

**data** Hash&lt;DataEntry, Array&gt;

DataEntry = "ministries" | "employees" | "stats"

ministries = Array&lt;Ministry&gt;

Ministry

* **id** number used as m_id in stats json
* **name** string

employees = Array&lt;EmployeeStats&gt;

EmployeeStats

* m_id number ministry id
* v Hash key year, value employee count

stats = Array&lt;StatsEntry&gt;

* **i_id** number indicator id
* **c_id** number category id
* **m_id** number ministry id
* **v** Hash key string year, value number

## counties_stats.json

It is the same as ministries_stats.json, but m_id in this case shows county id and population is the same as ministry employees.

county id is the number in counties [ordered list](https://github.com/code4romania/sna-client/blob/master/src/app/components/Sidebar/counties.json). 
