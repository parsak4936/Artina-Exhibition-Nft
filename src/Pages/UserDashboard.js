import React, { useState, useEffect } from "react";
import { ScrollTop } from "primereact/scrolltop";
import "./UserDashboard.css";
import { Card } from "primereact/card";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { Chart } from "primereact/chart";
import "primeflex/primeflex.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import LOGO from "./artina-logo.jpg";
// import { CustomerService } from './service/CustomerService';

import { Fieldset } from "primereact/fieldset";
import Header from "../components/DashboardNavBar/Header";
import Footer from "../components/Footer/Footer";

function UserDashboard() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(10);

  const [lazyParams, setLazyParams] = useState({
    first: 0,
    rows: 10,
    page: 1,
    sortField: null,
    sortOrder: null,
    filters: {
      name: { value: "", matchMode: "contains" },
      "country.name": { value: "", matchMode: "contains" },
      company: { value: "", matchMode: "contains" },
      "representative.name": { value: "", matchMode: "contains" },
    },
  });

  let loadLazyTimeout = null;
  const TableData = [
    {
      id: 1,
      Exhibitionname: "adasd",

      CommissionPercentage: "12%",
      ProductSum: "1123",
      Benefit: "19%",
      EthersaleVolume: " ?",
      saleVolume: " ?",
      TerminationDate: "1999/02/03",
    },
    {
      id: 2,
      Exhibitionname: "adasd",

      CommissionPercentage: "12%",
      ProductSum: "1123",
      Benefit: "19%",
      EthersaleVolume: " ?",
      saleVolume: " ?",
      TerminationDate: "1999/02/03",
    },
    {
      id: 3,
      Exhibitionname: "adasd",

      CommissionPercentage: "12%",
      ProductSum: "1123",
      Benefit: "19%",
      EthersaleVolume: " ?",
      saleVolume: " ?",
      TerminationDate: "1999/02/03",
    },
  ];
  useEffect(() => {
    loadLazyData();
    setTimeout(() => {
      setLoading(false);
    }, Math.random() * 1000 + 250);

    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["برداشت", "مانده", "بلوکه شده"],
      datasets: [
        {
          data: [300000, 50000, 100000],
          backgroundColor: [
            documentStyle.getPropertyValue("--indigo-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--red-700"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--indigo-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--red-400"),
          ],
        },
      ],
    };
    const options = {
      cutout: "60%",
    };

    setChartData(data);
    setChartOptions(options);
  }, [lazyParams]);

  const loadLazyData = () => {
    setLoading(true);

    if (loadLazyTimeout) {
      clearTimeout(loadLazyTimeout);
    }
  };

  const onPage = (event) => {
    setLazyParams(event);
  };

  const onSort = (event) => {
    setLazyParams(event);
  };

  const onFilter = (event) => {
    event["first"] = 0;
    setLazyParams(event);
  };
  const items = [
    {
      label: "File",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
            },
            {
              label: "Video",
              icon: "pi pi-fw pi-video",
            },
          ],
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          separator: true,
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "Left",
          icon: "pi pi-fw pi-align-left",
        },
        {
          label: "Right",
          icon: "pi pi-fw pi-align-right",
        },
        {
          label: "Center",
          icon: "pi pi-fw pi-align-center",
        },
        {
          label: "Justify",
          icon: "pi pi-fw pi-align-justify",
        },
      ],
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    },
    {
      label: "Events",
      icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archieve",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
      ],
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  const ProductSum = (TableData) => {
    return (
      <React.Fragment>
        <span className="image-text text-4xl">{TableData.ProductSum} </span>
      </React.Fragment>
    );
  };
  const saleVolume = (TableData) => {
    return (
      <React.Fragment>
        <span className="image-text text-4xl">{TableData.saleVolume} </span>
      </React.Fragment>
    );
  };

  const ExhibitionImage = (rowData) => {
    return (
      <div>
        <img
          src=""
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          width={32}
          style={{ verticalAlign: "middle" }}
        />
      </div>
    );
  };
  const EthersaleVolume = (rowData) => {
    return <div className="text-4xl">{rowData.EthersaleVolume}</div>;
  };

  const TerminationDate = (rowData) => {
    //TODO: Modal Accept Warning !
    return <div className="text-4xl">{rowData.TerminationDate}</div>;
  };

  const Benefit = (TableData) => {
    return <spen className="text-4xl">{TableData.Benefit}</spen>;
  };
  const CommissionPercentage = (TableData) => {
    return (
      <div className="text-4xl">
        <> {TableData.CommissionPercentage}</>
      </div>
    );
  };

  const Exhibitionname = (TableData) => {
    return (
      <div style={{ fontFamily: "IRANSansWeb" }}>
        <span className="image-text text-4xl">
          {" "}
          {TableData.Exhibitionname}{" "}
        </span>
      </div>
    );
  };
  const end = (
    <div className="  ">
      <img
        className=" justify-content-end  h-7rem border-round-3xl "
        alt="logo"
        src={LOGO}
      ></img>
    </div>
  );
  const ReportLegend = (
    <div className="flex align-items-center text-primary">
      <span className="pi pi-user mr-2"></span>
      <span className="font-bold text-5xl"> گزارش مالی</span>
    </div>
  );
  const TurnoverLegend = (
    <div className="flex align-items-center text-primary">
      <span className="pi pi-user mr-2"></span>
      <span className="font-bold text-5xl"> گردش حساب </span>
    </div>
  );
  return (
    <div>
      <div className=" " style={{ direction: "rtl" }}>
        <Header />

        <div className=" flex align-items-center justify-content-center grid   ">
          <div className=" grid  col-12   md:col-6 lg:col-6 ">
            <Fieldset
              className="   m-4   "
              legend={ReportLegend}
              style={{ backgroundColor: "#FAFAFA" }}
            >
              <div className=" flex justify-content-start text-5xl p-2 m-2  ">
                {" "}
                <p className="  ">مانده قابل برداشت : 1111111111111111</p>
              </div>
              <div className=" flex justify-content-start text-5xl p-2  m-2 ">
                {" "}
                <p className="  ">مانده قابل معامله : 999999292292</p>
              </div>
              <div className="flex justify-content-start text-5xl p-2  m-2">
                {" "}
                <p
                  className=" 

"
                >
                  مسدود شده : 0
                </p>
              </div>
            </Fieldset>
          </div>

          <div className=" grid  col-12   md:col-6 lg:col-6 ">
            <Fieldset
              className="  m-4   "
              legend={TurnoverLegend}
              style={{ backgroundColor: "#FAFAFA" }}
            >
              <div className="  p-2  m-2  flex justify-content-start">
                {" "}
                <p className="text-5xl ">
                  واریز : +900.000.000 <span> +</span>
                </p>
              </div>
              <div className=" p-2  m-2  flex justify-content-start ">
                {" "}
                <p className="text-5xl ">
                  {" "}
                  برداشت : 912.123.12313 <span> -</span>
                </p>
              </div>
              <div className="flex justify-content-start  p-2  m-2">
                {" "}
                <p className="text-5xl ">
                  {" "}
                  واریز : +123.123.12. <span> +</span>{" "}
                </p>
              </div>
            </Fieldset>
          </div>

          {/* section 2 : Tabels about exhibitions */}

          <div className=" grid   col-12  m-9  p-9">
            <div className="card  h-30rem">
              <DataTable
                value={TableData}
                scrollable
                scrollHeight="400px"
                lazy
                // paginator
                filterDisplay="row"
                responsiveLayout="scroll"
                dataKey="id"
                first={lazyParams.first}
                rows={10}
                totalRecords={totalRecords}
                onPage={onPage}
                onSort={onSort}
                sortField={lazyParams.sortField}
                sortOrder={lazyParams.sortOrder}
                onFilter={onFilter}
                filters={lazyParams.filters}
                loading={loading}
              >
                <Column
                  field=" نام نمایشگاه"
                  header=" عکس"
                  sortable
                  body={ExhibitionImage}
                />

                <Column
                  field="name"
                  header=" نام نمایشگاه  "
                  sortable
                  filter
                  filterPlaceholder="Search by name"
                  body={Exhibitionname}
                  //  filterPlaceholder="Search by name"
                />

                <Column
                  field="country.name"
                  header="  درصد کمیسیون "
                  filterField="country.name"
                  body={CommissionPercentage}
                  sortable
                  //  filter
                  //  filterPlaceholder="Search by country"
                />

                <Column
                  field="company"
                  sortable
                  body={ProductSum}
                  // filter
                  header=" تعداد آثار  "
                  // filterPlaceholder="Search by company"
                />
                <Column
                  field="company"
                  sortable
                  body={Benefit}
                  // filter
                  header="سود حاصل   "
                  // filterPlaceholder="Search by company"
                />
                <Column
                  style={{ fontFamily: "IRANSansWeb" }}
                  field="representative.name"
                  header="  حجم فروش به اتر "
                  sortable
                  body={EthersaleVolume}
                  // filter
                  // filterPlaceholder="Search by representative"
                />
                <Column
                  field="representative.name"
                  header=" حجم فروش "
                  sortable
                  body={saleVolume}

                  // filterPlaceholder="Search by representative"
                />
                <Column
                  field=""
                  sortable
                  style={{ fontFamily: "IRANSansWeb" }}
                  header="تاریخ پایان"
                  // filterPlaceholder="Search by company"
                  body={TerminationDate}
                />
              </DataTable>
            </div>
          </div>
        </div>

        {/* section 3 : devided into two cards ; one with detaild and one with requesting some files \two button */}

        <div className=" flex align-items-center justify-content-center grid   ">
          <div className=" grid  col-12   md:col-6 lg:col-6 ">
            <Card title=" درآمد حاصله " className=" m-4 h-full ">
              <p className="m-0 text-5xl  p-2  m-2">
                <p className="m-4 text-5xl  p-button-outlined">در ماه اخیر</p>

                <br></br>
                <p className=" m-4  text-5xl  p-button-outlined">در سال اخیر</p>
              </p>
            </Card>
          </div>
          <div className=" grid  col-12   md:col-6 lg:col-6 ">
            <Card title="  دریافت گزارش با فرمت .csv" className=" m-4 h-full">
              <p className="m-0 text-5xl ">
                <Button
                  label="گزارش نمایشگاه های یک ماه اخیر"
                  className="m-4 text-5xl  p-button-outlined"
                />
                <br></br>
                <Button
                  label=" گزارش نمایشگاه های یک سال اخیر"
                  className=" m-4  text-5xl  p-button-outlined"
                />
              </p>
            </Card>
          </div>
        </div>

        <div className="card m-9 align-items-center justify-content-center  ">
          <Chart
            type="pie"
            data={chartData}
            options={chartOptions}
            className="w-full   md:w-30rem"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default UserDashboard;
