import React from "react";

export function NavBar() {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg">
			<div className="container-fluid">
				<div>
					<a className="navbar-brand" href="#">
						<strong>Start Travel</strong>
					</a>
				</div>
				<div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse "
						id="navbarSupportedContent">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item ">
								<a className="nav-link" href="#">
									About
								</a>
							</li>

							<li className="nav-item ">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item j">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
