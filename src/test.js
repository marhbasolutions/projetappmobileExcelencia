<View style={{ width: '100%', height: '50%', backgroundColor: '#30336b', paddingLeft: 10 }} >

          <ScrollView
              ref={(scrollView) => { this.scrollView = scrollView; }}
              style={styles.container}
              //pagingEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}

              decelerationRate={0}
              snapToInterval={width - 60}
              snapToAlignment={"center"}
              contentInset={{
                top: 0,
                // left: 30,
                bottom: 0,
                // right: 30,
              }}>
              <View style={styles.view}>

                <ImageBackground source={image1} style={styles.image} imageStyle={{ borderRadius: 6 }}
                >
                  <View style={styles.viewChild}>

                    <Text style={styles.title1}>50%</Text>
                    <Text style={styles.title2}>Assurance home for you and your family</Text>
                    <Button style={{ color: '#fff', marginTop: 5, paddingLeft: 6, paddingRight: 6, alignSelf: 'flex-end' }} info><Text style={{ color: '#fff' }} > Take a lock </Text></Button>


                  </View>

                </ImageBackground>

              </View>
              <View style={styles.view}>

                <ImageBackground source={image2} style={styles.image} imageStyle={{ borderRadius: 6 }}
                >
                  <View style={styles.viewChild}>

                    <Text style={styles.title1}>50%</Text>
                    <Text style={styles.title2}>Assurance home for you and your family</Text>
                    <Button style={{ color: '#fff', marginTop: 5, paddingLeft: 6, paddingRight: 6, alignSelf: 'flex-end' }} warning><Text style={{ color: '#fff' }} > Take a lock </Text></Button>


                  </View>

                </ImageBackground>

              </View>
              <View style={styles.view}>

                <ImageBackground source={image3} style={styles.image} imageStyle={{ borderRadius: 6 }}
                >
                  <View style={styles.viewChild}>

                    <Text style={styles.title1}>50%</Text>
                    <Text style={styles.title2}>Assurance home for you and your family</Text>
                    <Button style={{ color: '#fff', marginTop: 5, paddingLeft: 6, paddingRight: 6, alignSelf: 'flex-end' }} warning><Text style={{ color: '#fff' }} > Take a lock </Text></Button>


                  </View>

                </ImageBackground>

              </View>
              
            </ScrollView>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', position:'relative',top:-80}}>
            <Button onPress={()=>this.scrollView.scrollToEnd({animated: true})} style={{position:'relative',margin:5,backgroundColor:'transparent',height:15,borderRadius:100}}><Text style={{width:15,height:15,backgroundColor:'white',borderRadius:100}}></Text></Button>
            <Button onPress={()=>this.scrollView.scrollTo({x:400,animated: true})} style={{position:'relative',margin:5,height:15,borderRadius:100}}><Text style={{width:15,height:15,backgroundColor:'white',borderRadius:100}}></Text></Button>
            <Button onPress={()=>this.scrollView.scrollTo({x:0,animated: true})} style={{position:'relative',margin:5,height:15,borderRadius:100}}><Text style={{width:15,height:15,backgroundColor:'white',borderRadius:100,}}></Text></Button>
            </View>

                
          </View>


          <View style={{ width: '100%', height: '100%', }} >

            <View style={styles.actionsBlock}>

              <View style={{ flexDirection: 'row' }}>
                <View style={styles.div} >
                  <TouchableOpacity style={styles.divToutch}
                    onPress={() => this.props.navigation.navigate('Contract')}
                  >
                    <Text style={styles.titleDiv}>Prepare Create contrat</Text>
                    <FontAwesome5 color={'#fff'} name="file-signature" size={24} />
                    

                  </TouchableOpacity>
                </View>
                <View style={styles.div} >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Rdv')}
                    style={styles.divToutch} >

                    <Text style={styles.titleDiv}>Prendre RDV</Text>

                    <FontAwesome5  color={'#fff'} name="calendar-alt" size={24} />

                    

                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={styles.div} >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Devis')}

                    style={styles.divToutch} >

                    <Text style={styles.titleDiv}>Simuler devis</Text>
                    <FontAwesome5  color={'#fff'} name="calculator" size={24} />
                    

                  </TouchableOpacity>
                </View>
                <View style={styles.div} >
                  <TouchableOpacity style={styles.divToutch}

                    onPress={() => this.props.navigation.navigate('Guide')}
                  >

                    <Text style={styles.titleDiv}>Guider rensigner</Text>
                    <FontAwesome  color={'#fff'} size={24} name="handshake-o" />
                    

                  </TouchableOpacity>
                </View>

              </View>


            </View>

            <ScrollView
              ref={(scrollView2) => { this.scrollView2 = scrollView2; }}
              style={[styles.container,styles.containerBottom]}
              //pagingEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}

              decelerationRate={0}
              snapToInterval={width - 60}
              snapToAlignment={"center"}
              contentInset={{
                top: 200,
                // left: 30,
                bottom: 0,
                // right: 30,
              }}>
              <View style={styles.view2}>

                <View style={styles.viewChild2}>

                  <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: '40%', height: '100%', }} >
                      <Image source={image4} style={styles.imageDiv} />

                    </View>
                    <View style={{ width: '60%', height: '100%', padding: 5 }} >

                      <Text style={styles.titleScroll2}>Sinistres</Text>
                      <Text style={styles.descScroll2}>Commentez pour lancer une discussion, ajouter une le plan de travail.</Text>

                    </View>

                  </TouchableOpacity>

                </View>


              </View>

              <View style={styles.view2}>

                <View style={styles.viewChild2}>

                  <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: '40%', height: '100%', }} >
                      <Image source={image1} style={styles.imageDiv} />

                    </View>
                    <View style={{ width: '60%', height: '100%', padding: 5 }} >

                      <Text style={styles.titleScroll2}>Assurance vie</Text>
                      <Text style={styles.descScroll2}>Commentez pour lancer une discussion, ajouter une le plan de travail.</Text>

                    </View>

                  </TouchableOpacity>

                </View>


              </View>


              <View style={styles.view2}>

                <View style={styles.viewChild2}>

                  <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: '40%', height: '100%', }} >
                      <Image source={image3} style={styles.imageDiv} />

                    </View>
                    <View style={{ width: '60%', height: '100%', padding: 5 }} >

                      <Text style={styles.titleScroll2}>Assutrance Auto & Moto</Text>
                      <Text style={styles.descScroll2}>Commentez pour lancer une discussion, ajouter une le plan de travail.</Text>

                    </View>

                  </TouchableOpacity>

                </View>


              </View>


            </ScrollView>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', position:'relative',top:200}}>
            <Button onPress={()=>this.scrollView.scrollToEnd({animated: true})} style={{position:'relative',margin:5,backgroundColor:'orange',height:15,width:40}}><Text style={{width:'100%',height:'100%',}}></Text></Button>
            <Button onPress={()=>this.scrollView.scrollTo({x:400,animated: true})} style={{position:'relative',margin:5,backgroundColor:'orange',height:15,width:40}}><Text style={{width:'100%',height:'100%',backgroundColor:'orange',}}></Text></Button>
            <Button onPress={()=>this.scrollView.scrollTo({x:0,animated: true})} style={{position:'relative',margin:5,backgroundColor:'orange',height:15,width:40}}><Text style={{width:'100%',height:'100%',backgroundColor:'orange',borderRadius:100,}}></Text></Button>
            </View>



          </View>

