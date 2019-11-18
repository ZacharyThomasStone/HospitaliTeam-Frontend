import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'

export default class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Sign out</a>
                        </li>
                    </ul>
                </Nav>

                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">
                                            <span data-feather="home"></span>
                                            Dashboard <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file"></span>
                                            Orders
            </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart"></span>
                                            Products
            </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="users"></span>
                                            Customers
            </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="bar-chart-2"></span>
                                            Reports
            </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="layers"></span>
                                            Integrations
            </a>
                                    </li>
                                </ul>

                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>Saved reports</span>
                                    <a className="d-flex align-items-center text-muted" href="#">
                                        <span data-feather="plus-circle"></span>
                                    </a>
                                </h6>
                                <ul className="nav flex-column mb-2">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text"></span>
                                            Current month
            </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text"></span>
                                            Last quarter
            </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text"></span>
                                            Social engagement
            </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text"></span>
                                            Year-end sale
            </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Dashboard</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                    </div>
                                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                        <span data-feather="calendar"></span>
                                        This week
          </button>
                                </div>
                            </div>

                            <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

                            <h2>Section title</h2>
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1,001</td>
                                            <td>Lorem</td>
                                            <td>ipsum</td>
                                            <td>dolor</td>
                                            <td>sit</td>
                                        </tr>
                                        <tr>
                                            <td>1,002</td>
                                            <td>amet</td>
                                            <td>consectetur</td>
                                            <td>adipiscing</td>
                                            <td>elit</td>
                                        </tr>
                                        <tr>
                                            <td>1,003</td>
                                            <td>Integer</td>
                                            <td>nec</td>
                                            <td>odio</td>
                                            <td>Praesent</td>
                                        </tr>
                                        <tr>
                                            <td>1,003</td>
                                            <td>libero</td>
                                            <td>Sed</td>
                                            <td>cursus</td>
                                            <td>ante</td>
                                        </tr>
                                        <tr>
                                            <td>1,004</td>
                                            <td>dapibus</td>
                                            <td>diam</td>
                                            <td>Sed</td>
                                            <td>nisi</td>
                                        </tr>
                                        <tr>
                                            <td>1,005</td>
                                            <td>Nulla</td>
                                            <td>quis</td>
                                            <td>sem</td>
                                            <td>at</td>
                                        </tr>
                                        <tr>
                                            <td>1,006</td>
                                            <td>nibh</td>
                                            <td>elementum</td>
                                            <td>imperdiet</td>
                                            <td>Duis</td>
                                        </tr>
                                        <tr>
                                            <td>1,007</td>
                                            <td>sagittis</td>
                                            <td>ipsum</td>
                                            <td>Praesent</td>
                                            <td>mauris</td>
                                        </tr>
                                        <tr>
                                            <td>1,008</td>
                                            <td>Fusce</td>
                                            <td>nec</td>
                                            <td>tellus</td>
                                            <td>sed</td>
                                        </tr>
                                        <tr>
                                            <td>1,009</td>
                                            <td>augue</td>
                                            <td>semper</td>
                                            <td>porta</td>
                                            <td>Mauris</td>
                                        </tr>
                                        <tr>
                                            <td>1,010</td>
                                            <td>massa</td>
                                            <td>Vestibulum</td>
                                            <td>lacinia</td>
                                            <td>arcu</td>
                                        </tr>
                                        <tr>
                                            <td>1,011</td>
                                            <td>eget</td>
                                            <td>nulla</td>
                                            <td>Class</td>
                                            <td>aptent</td>
                                        </tr>
                                        <tr>
                                            <td>1,012</td>
                                            <td>taciti</td>
                                            <td>sociosqu</td>
                                            <td>ad</td>
                                            <td>litora</td>
                                        </tr>
                                        <tr>
                                            <td>1,013</td>
                                            <td>torquent</td>
                                            <td>per</td>
                                            <td>conubia</td>
                                            <td>nostra</td>
                                        </tr>
                                        <tr>
                                            <td>1,014</td>
                                            <td>per</td>
                                            <td>inceptos</td>
                                            <td>himenaeos</td>
                                            <td>Curabitur</td>
                                        </tr>
                                        <tr>
                                            <td>1,015</td>
                                            <td>sodales</td>
                                            <td>ligula</td>
                                            <td>in</td>
                                            <td>libero</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                </div>
            </React.Fragment>
                )
            }
        }
