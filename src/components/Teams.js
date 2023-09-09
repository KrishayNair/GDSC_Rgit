import React, { useState, useEffect } from 'react';
import '../components/teams.css';
import Grid from '@mui/material/Grid';
import Member from './Member';
import {
    CoreTeam, CCTeam, OperationsTeam,
    CloudTeam, WebTeam, WebLead, DCTeam, DCLead, AppTeam, AppLead, 
    PRTeam, PRLead, AiMlTeam, AiMlLead, CyberTeam, CyberLead, ContentTeam, ContentLead,
    IoTRoboticsTeam, IoTLead
} from './teamsData';



const Teams = () => {

    const teams = ['Core', 'CC & OpenSource', 'Operation', 'Cloud', 'Web', 'Digital Creative', 'App', 'Outreact and PR', 'AI/ML', 
                    'Cyber Security', 'Content', 'IOT/Robotics']

    const buttons = document.getElementsByTagName('button');
       
    // console.log(CoreTeam, CCTeam, OperationsTeam, CloudTeam);

    const [teamName, setTeamName] = useState('Core')
    const [element, setElement] = useState('');

    function setCore() {
        // e.preventDefault();
        setElement(<>
            <div className="team container">
            <div className="lead">
                <h1>
                    <span className='G'>G</span>
                    <span className='D1'>D</span>
                    <span className='S'>S</span>
                    <span className='C'>C</span>
                </h1>
            </div>
            <Member 
                name="Sakshi Pandey"
                image='https://res.cloudinary.com/gdscrgit/image/upload/v1664095191/gdsc/teams/core/sakshi_llarvq.png'
                position="GDSC Lead"
                github_link=""
                linkedin_link=""
            />
            <div className="lead">
                <h1>
                    <span className='L'>L</span>
                    <span className='E'>E</span>
                    <span className='A'>A</span>
                    <span className='D2'>D</span>
                </h1>
            </div>
        </div>
        <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                CoreTeam.map(member => {
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>)
    }
    
    function setCC() {
        // e.preventDeault();
        setElement(<>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                CCTeam.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>)
    }

    function setOperations() {
        setElement(<>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                OperationsTeam.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>)
    }

    function setCloud() {
        setElement(<>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                CloudTeam.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>)
    }

    function setWeb() {
        setElement(<>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                WebLead.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                WebTeam.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>)
    }

    function setDC() {
        setElement(<>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                DCLead.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                DCTeam.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>)
    }

    function setApp() {
        setElement(<>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                AppLead.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                AppTeam.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>)
    }

    function setPR() {
            setElement(<>
                <Grid 
                container 
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {
                    PRLead.map(member => {
                        console.log(member)
                        return (
                            <Grid item sm={12} md={4}>
                                <Member 
                                    name={member.name}
                                    image={member.img}
                                    position={member.position}
                                    github_link={member.gitHub}
                                    linkedin_link={member.linkedin}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
                <Grid 
                container 
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {
                    PRTeam.map(member => {
                        console.log(member)
                        return (
                            <Grid item sm={12} md={4}>
                                <Member 
                                    name={member.name}
                                    image={member.img}
                                    position={member.position}
                                    github_link={member.gitHub}
                                    linkedin_link={member.linkedin}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
            </>)
    }

    function setAIML() {
            setElement(<>
                <Grid 
                container 
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {
                    AiMlLead.map(member => {
                        console.log(member)
                        return (
                            <Grid item sm={12} md={4}>
                                <Member 
                                    name={member.name}
                                    image={member.img}
                                    position={member.position}
                                    github_link={member.gitHub}
                                    linkedin_link={member.linkedin}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
                <Grid 
                container 
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {
                    AiMlTeam.map(member => {
                        console.log(member)
                        return (
                            <Grid item sm={12} md={4}>
                                <Member 
                                    name={member.name}
                                    image={member.img}
                                    position={member.position}
                                    github_link={member.gitHub}
                                    linkedin_link={member.linkedin}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
            </>)
    }

    function setCyber() {
        setElement(<>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                CyberLead.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                CyberTeam.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>)
    }

    function setContent() {
        setElement(<>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                ContentLead.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                ContentTeam.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>)
    }

    function setIOT() {
        setElement(<>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                IoTLead.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                IoTRoboticsTeam.map(member => {
                    console.log(member)
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>)
    }

    useEffect(() => {
        buttons[0].style.color = '#fff';
        buttons[0].style.backgroundColor = '#EA4335';
        setElement(<>
            <div className="team container">
            <div className="lead">
                <h1>
                    <span className='G'>G</span>
                    <span className='D1'>D</span>
                    <span className='S'>S</span>
                    <span className='C'>C</span>
                </h1>
            </div>
            <Member 
                name="Sakshi Pandey"
                image='https://res.cloudinary.com/gdscrgit/image/upload/v1664394183/gdsc/teams/dc/Sakshi_pxveem.png'
                position="GDSC Lead"
                github_link="https://github.com/thesakshipandey"
                linkedin_link="https://www.linkedin.com/in/thesakshipandey"
            />
            <div className="lead">
                <h1>
                    <span className='L'>L</span>
                    <span className='E'>E</span>
                    <span className='A'>A</span>
                    <span className='D2'>D</span>
                </h1>
            </div>
        </div>
        <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                CoreTeam.map(member => {
                    return (
                        <Grid item sm={12} md={4}>
                            <Member 
                                name={member.name}
                                image={member.img}
                                position={member.position}
                                github_link={member.gitHub}
                                linkedin_link={member.linkedin}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>)
    }, [buttons])


    const handleClick = (e) => {
        for (const ele of buttons) {
            ele.style.backgroundColor = '#eeeeee';
            ele.style.color = "#000000";
        }
        if (e.target.value === 'Core' || e.target.value === 'Web' || e.target.value === "AI/ML") {
            e.target.style.backgroundColor = '#EA4335';
            if (e.target.value === 'Core') {
                setCore();
            } else if (e.target.value === 'Web') {
                setWeb();
            } else if (e.target.value === 'AI/ML') {
                setAIML();
            }
        } else if (e.target.value === 'CC & OpenSource' || e.target.value === 'Digital Creative' || e.target.value === 'Cyber Security') {
            e.target.style.backgroundColor = '#34A853';
            if (e.target.value === 'CC & OpenSource') {
                setCC();
            } else if (e.target.value === 'Digital Creative') {
                setDC();
            } else if (e.target.value === 'Cyber Security') {
                setCyber();
            }
        } else if (e.target.value === 'Operation' || e.target.value === 'App' || e.target.value === 'Content') {
            e.target.style.backgroundColor = '#4285F4';
            if (e.target.value === 'Operation') {
                setOperations();
            } else if (e.target.value === 'App') {
                setApp();
            } else if (e.target.value === 'Content') {
                setContent();
            }
        } else if (e.target.value === 'Cloud' || e.target.value === 'Outreact and PR' || e.target.value === 'IOT/Robotics') {
            e.target.style.backgroundColor = '#FBBC04';
            if (e.target.value === 'Cloud') {
                setCloud();
            } else if (e.target.value === 'Outreact and PR') {
                setPR();
            } else if (e.target.value === 'IOT/Robotics') {
                setIOT();
            }
        }
        e.target.style.color = '#fff';
        setTeamName(e.target.value);
    }

    // const handleMouseOver = (e) => {
    //     for (const ele of buttons) {
    //         ele.style.backgroundColor = '#eeeeee';
    //         ele.style.color = "#000000";
    //     }
    //     if (e.target.value === 'Core' || e.target.value === 'Web' || e.target.value === "AI/ML") {
    //         e.target.style.backgroundColor = '#EA4335';
    //     } else if (e.target.value === 'CC & OpenSource' || e.target.value === 'Digital Creative' || e.target.value === 'Cyber Security') {
    //         e.target.style.backgroundColor = '#34A853';
    //     } else if (e.target.value === 'Operation' || e.target.value === 'App' || e.target.value === 'Content') {
    //         e.target.style.backgroundColor = '#4285F4';
    //     } else if (e.target.value === 'Cloud' || e.target.value === 'Outreact and PR' || e.target.value === 'IOT/Robotics') {
    //         e.target.style.backgroundColor = '#FBBC04';
    //     }
    //     e.target.style.color = '#fff';
    // }

  return (
    <>
        <div className="teams-container">
            <h1>Our Team</h1>
            <div className="option-bar">
                {
                    teams.map((name, index) => {
                        return (
                            <button 
                            onClick={handleClick} 
                            value={name} 
                            key={index}
                            >
                                {name}
                            </button>
                        )
                    })
                }
            </div>
            <h1>{teamName}</h1>
        </div>
        {element}
    </>
  );
}


export default Teams;