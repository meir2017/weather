

			<Container>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Alert className="mycard" color="light">
                        <Row>
                            <Col>{this.props.res_5[0].Date}</Col>

                            <Col>
                                {' '}
                                <img src={this.getPic(this.props.res_5[0].Night.Icon)} />
                            </Col>
                            <Col>
                                {this.props.res_5[0].Temperature.Maximum.Value}/
                                {this.props.res_5[0].Temperature.Minimum.Value}
                            </Col>
                            <Col>{this.props.res_5[0].Day.IconPhrase}</Col>
                        </Row>
                    </Alert>
                </Col>
            </Row>
        </Container>