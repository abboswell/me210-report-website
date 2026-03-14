export const siteData = {
  "brand": {
    "shortName": "JarJar the Table",
    "fullName": "ME 210 Curling Bot Report"
  },
  "theme": {
    "bg": "#f6f8fb",
    "ice": "#edf6ff",
    "red": "#dc3b3b",
    "blue": "#2357c9",
    "dark": "#0f172a"
  },
  "hero": {
    "eyebrow": "Autonomous Curling · ME 210 · Final Project",
    "title": "JarJar the Table",
    "subtitle": "ME 210 Curling Bot Report",
    "mainImage": {
      "src": "/images/report/hero-board-crowd.jpg",
      "alt": "Competition board and crowd at the ME 210 curling event",
      "label": "",
      "caption": "",
      "hideLabel": true,
      "fit": "contain"
    },
    "supportingImages": [
      {
        "src": "/images/report/board-with-pucks.png",
        "alt": "Curling house with red and blue pucks on the board",
        "label": "",
        "caption": "",
        "hideLabel": true,
        "fit": "contain"
      },
      {
        "src": "/images/report/cutie.jpeg",
        "alt": "Close-up team photo",
        "label": "",
        "caption": "",
        "hideLabel": true,
        "fit": "cover"
      },
      {
        "src": "/images/report/checkoff-celebration.png",
        "alt": "Team celebrating at checkoff",
        "label": "",
        "caption": "",
        "hideLabel": true,
        "fit": "cover"
      }
    ]
  },
  "sections": {
    "home": {
      "eyebrow": "Project Overview",
      "title": "Home",
      "description": "",
      "blocks": [
        {
          "type": "split",
          "label": "Project Overview",
          "title": "Purpose",
          "text": "The task is to design an autonomous machine that will compete against an opponent in a head-to-head version of curling, the Olympic “sport” that almost certainly ranks among the world’s all-time favorites.",
          "bullets": [],
          "image": {
            "src": "/images/report/board.png",
            "alt": "Top view and side view of the curling sheet layout",
            "label": "Board Layout",
            "caption": ""
          }
        },
        {
          "type": "split",
          "label": "Requirements",
          "title": "Requirements",
          "text": "",
          "bullets": [
            "Droid will begin in a random orientation within a random starting zone",
            "Beyond manual puck loading, the droid must operate autonomously and will be penalized for human interference during competition.",
            "Droid must properly navigate within the bounds of the curling sheet and may take shots from anywhere within those bounds.",
            "After deploying three pucks, the droid must fully return to the starting zone to be reloaded",
            "Puck trajectory must not exceed 1 inch of height off the ground after deployment from the droid",
            "Gameplay must automatically cease after 2 minutes"
          ],
          "image": {
            "src": "/images/report/group-photo.jpg",
            "alt": "Team photo with the robot at the competition",
            "label": "Competition Team Photo",
            "caption": ""
          },
          "reverse": true
        },
        {
          "type": "video",
          "label": "Demo Video",
          "title": "Demo Video",
          "url": "https://youtube.com/shorts/FbeWQDGcAEg?si=PCzhH2de6RPgVbfY"
        }
      ]
    },
    "mechanical": {
      "eyebrow": "Mechanical Design",
      "title": "Mechanical",
      "description": "",
      "blocks": [
        {
          "type": "split",
          "label": "Mechanical",
          "title": "Mechanical",
          "text": "The redesigned bot was optimized for rapid assembly and strength. It was fully assembled within 24 hours. The largest challenge was observing that the rod & bore column design was actually forming a perfect vacuum/airtight seal so it was impossible to bottom out the rod on assembly. Similarly, once partially assembled, it was impossible to pull the rod out of the bore. This was easily fixed by drilling a small vent hole in the pistons. Once this was fixed, there were no surprises. ¼” acrylic was wonderfully rigid, plenty ¼-20 through holes allowed for rearrangement and modification as desired, and every piece worked the first time. The motor mounts were far more rigid than the first version due to 4 mounting points over 2, and prevented adding off-axis load to the shafts. The most important part of the design was having a rough vision, picking out the off-the-shelf (OTS) parts available in lab that day, and then designing around them thanks to vendor drawings and specs available online. It’s much harder to design something then modify the parts to accept the OTS components. We had intended to curve the ramp, but the ¼” acrylic looked a bit too sturdy and it turned out the linear ramp was sufficient to deliver on the key design objectives so we kept it simple.",
          "bullets": [],
          "image": {
            "src": "/images/report/design-full.png",
            "alt": "Full CAD view of the redesigned bot",
            "label": "Full CAD View",
            "caption": "",
            "fit": "contain"
          },
          "imageTall": false,
          "imageAspect": "aspect-[4/3]"
        },
        {
          "type": "gallery",
          "label": "Mechanical Design Views",
          "title": "Mechanical Design Views",
          "description": "",
          "columns": 2,
          "items": [
            {
              "src": "/images/report/design-front.png",
              "alt": "Front CAD view of the redesigned bot",
              "label": "Front View",
              "caption": "",
              "fit": "contain"
            },
            {
              "src": "/images/report/design-side.png",
              "alt": "Side CAD view of the redesigned bot",
              "label": "Side View",
              "caption": "",
              "fit": "contain"
            },
            {
              "src": "/images/report/design-full.png",
              "alt": "Full CAD perspective view of the redesigned bot",
              "label": "Perspective View",
              "caption": "",
              "fit": "contain"
            },
            {
              "src": "/images/report/bot-on-board.jpg",
              "alt": "Built robot on the curling board",
              "label": "Built Bot",
              "caption": "",
              "fit": "cover"
            }
          ]
        },
        {
          "type": "split",
          "label": "Puck Deployment Magazine",
          "title": "Puck Deployment Magazine",
          "text": "Stepper Motor- a bipolar two-phase stepper motor with 1.8 degree steps was coupled to the 3d printed magazine to deploy pucks independent of sensor feedback as a simple open loop step system. The magazine would rotate at 90° intervals, progressing the slotted pucks along a low friction rail until they each dropped through the chassis floor and onto the ramp for deployment.\n\nTo size this system, a rough friction estimate was calculated. 8 oz per puck led to .23 kg, 3 pucks maximum and a wildly bounding 0.5 coefficient of static friction for metal on 3d printed PLA (more like .2 was anticipated) with a roughly 2 inch centerline radius demanded 172 mN-m of torque. This is within the wheelhouse of stepper motors, but was concerning. The carousel was designed to eliminate torque as much as possible, and contingencies were planned. The primary contingency was lubricating the sliding rail and slanting the plastic base to bring the pucks close to the threshold of free sliding, so the motor didn’t need to do much. In the end, 12V was enough to get 1 puck to budge not 3. However, with a step up converter the motor was able to move the pucks with ease. The hardest part, truly, was building a reliable system to adapt from the circular shaft to the carousel. Instead of a multi-part assembly, we went with the simplest viable option which had a cylindrical coupler with two transverse tapped through holes. hHis let us clamp onto the shaft with one set screw, and use a socket head screw with a washer to fasten the carousel to the coupler. This was plenty strong for the loads experienced.",
          "bullets": [],
          "image": {
            "src": "/images/report/puck-deployment-design.png",
            "alt": "Puck deployment magazine CAD detail",
            "label": "Puck Deployment Magazine",
            "caption": "",
            "fit": "contain"
          },
          "reverse": true,
          "imageAspect": "aspect-[4/3]"
        },
        {
          "type": "split",
          "label": "Key learnings:",
          "title": "Key learnings:",
          "text": "",
          "bullets": [
            "Do not assume fasteners will be available once required. Secure the entire supply chain and make sure you have the right size/length",
            "Lay out/have immutable components in hand before designing parts around them. Feel the mass to get a sense of the required rigidity",
            "Do not trade surface area for style points. We were successful in the end because we had a ton of space we could put an extra breadboard",
            "Sufficiently overdesigned vertical column constraints can avoid some of the classic under-constrained structure failures– triangles are great, but having 4 vertical columns instead of mid-segment mounting points freed up a lot of real estate",
            "Build brick houses. Our bot breaking because of slamming into the wall would have made checking off impossible– having ridiculously over-designed columns and thick acrylic let us just pick up the bot at awkward points and grab it before it hit walls without breaking it"
          ],
          "image": {
            "src": "/images/report/bot-on-board.jpg",
            "alt": "Built robot on the curling board",
            "label": "On the Sheet",
            "caption": "",
            "fit": "cover"
          },
          "imageAspect": "aspect-[4/3]"
        }
      ]
    },
    "electrical": {
      "eyebrow": "Electrical Design",
      "title": "Electrical",
      "description": "",
      "blocks": [
        {
          "type": "split",
          "label": "Fig 1. Global Electronic Schematic",
          "title": "Electronics",
          "text": "Our project is run entirely off one Arduino Uno R3. A switch to a Mega was considered at various points, but due to fairly simple control algorithms and efficient use of pins we decided it was unnecessary. The Arduinos were not perfect commodities, however, and we observed different performance by the onboard voltage regulator for the clone vs genuino. The clone heated up significantly more.",
          "bullets": [],
          "image": {
            "src": "/images/report/kicad-global-schematic.png",
            "alt": "Global Electronic Schematic",
            "label": "Fig 1. Global Electronic Schematic",
            "caption": "",
            "fit": "contain",
            "hideLabel": false
          },
          "imageAspect": "aspect-[16/10]",
          "imageTall": false
        },
        {
          "type": "split",
          "label": "Subcircuits",
          "title": "Motor and Drive System",
          "text": "The robot uses two JameCo DC 12V #162191 motors with a 30:1 gear ratio attached near the center of the chassis by customized motor mounts. These motors drive two 2-inch diameter wheels that have been calculated to progress down the length of the playing board in ~12 seconds with a fully loaded puck magazine. The motors are controlled by a L298 H-bridge motor driver that enables precise speed control and bidirectional rotation. An additional two ball caster wheels are used to balance and support the robot in turning freely in all directions with little resistance.\n\nDrive L:   ENA=D9  IN1=D7  IN2=D8\nDrive R:   ENA=D10 IN1=D12 IN2=D11",
          "bullets": [],
          "image": {
            "src": "/images/report/motor-drive-circuit.png",
            "alt": "Motor drive circuit",
            "label": "Fig. 2 Motor drive circuit",
            "caption": "",
            "fit": "contain",
            "hideLabel": false
          },
          "imageAspect": "aspect-[4/3]",
          "imageTall": false
        },
        {
          "type": "split",
          "label": "Ultrasonic Sensors (HC-SR04)",
          "title": "Ultrasonic Sensors (HC-SR04)",
          "text": "One ultrasonic sensor was mounted on the front of the robot for environment sensing and navigation from the random orientation within the starting box. These sensors determine distance to neighboring objects through the time delay of signals bounced back from the ultrasonic pulses it sends into the surrounding environment. This sensor performed excellently and was quite precise except for a notable edge case when positioned 45 degrees off the normal to the wall when very close. This meant the trigger sound waves would simply escape into the rest of the arena rather than being at least partially reflected back to the echo pin. There were various software fixes to address this. One would be to back up a small amount and check if the maxed out reading persists.\n\nUltrasonic: TRIG=D5 ECHO=D6",
          "bullets": [],
          "image": {
            "src": "/images/report/ultrasound-pinout.png",
            "alt": "Ultrasonic pinout",
            "label": "Fig 3. Ultrasonic pinout",
            "caption": "",
            "fit": "contain",
            "hideLabel": false
          },
          "reverse": true,
          "imageAspect": "aspect-[4/3]",
          "imageTall": false
        },
        {
          "type": "split",
          "label": "Tape Sensors (OPB703WZ)",
          "title": "Tape Sensors (OPB703WZ)",
          "text": "Four tape sensors were attached to the front of the chassis for boundary definition of the starting box, line following up the curling arena, and identification of the hogline that could not be crossed. We experienced much difficulty with apparently faulty tape sensors. Pre-harnessing, they appeared to work. When we soldered jumper wires onto them, they somehow refused to work even when plugged right into the same ports on the breadboard that had belonged to a successful one. It is possible that the soldering damaged the LEDs\n\nTape:      LO=A4 LI=A5 RI=A1 RO=A2",
          "bullets": [],
          "image": {
            "src": "/images/report/tape-sensor-circuit.png",
            "alt": "Representative tape sensor circuit. Out node on right.",
            "label": "Fig 4. Representative tape sensor circuit. Out node on right.",
            "caption": "",
            "fit": "contain",
            "hideLabel": false
          },
          "imageAspect": "aspect-[4/3]",
          "imageTall": false
        },
        {
          "type": "split",
          "label": "IR circuit +  Servo",
          "title": "IR circuit +  Servo",
          "text": "Initially, our design required an IR detecting turret capable of scanning 180 degrees to position our bot. The concept was to use calibrated distances and the angle between them to know our position at all times. However, as we progressed and questioned requirements, it became clear that simply line following-driven navigation would be superior. If there was no tape on the board, especially if there was no tape line connecting the starting box and the hog line, then perhaps this would have been necessary. The circuit for this IR detection was a AC-coupled phototransistor amplifier circuit. By blocking DC voltage, we were able to amplify the 909Hz signal using the square wave like an AC signal. It was quite successful in early testing, but once the rest of the robot struggled it was descoped to focus on required functionality.",
          "bullets": [],
          "image": {
            "src": "/images/report/ir-circuit.png",
            "alt": "IR Circuit",
            "label": "Fig 5. IR Circuit",
            "caption": "",
            "fit": "contain",
            "hideLabel": false
          },
          "reverse": true,
          "imageAspect": "aspect-[4/3]",
          "imageTall": false
        },
        {
          "type": "split",
          "label": "Power lines",
          "title": "Power lines",
          "text": "Most of our struggles came from the power delivery system. We had three power rails: unregulated battery power, 12V regulated, and 5V regulated. However, despite having separate  L298N 5V rails, the Arduino logic high output was only 0.3V, and the onboard 5V regulator was getting uncomfortably hot despite not powering any peripheral devices. Further analysis determined that the LED on the motor drivers was illuminating while the batteries were removed but the Arduino was powered via USB. It seems that the 12V regulated supply allowed backfeeding of current from the arduino 5V regulator, with the working theory that while on battery this backfeeding would cause significant current draw on the 5V regulator and drag down the output pins. Adding a 1N4001 on the output of all regulators rectified this problem, and the rest of the power system performed admirably.",
          "bullets": [],
          "image": {
            "src": "/images/report/power-rail-config.png",
            "alt": "Power rail configuration. Fuse not shown.",
            "label": "Fig 6. Power rail configuration. Fuse not shown.",
            "caption": "",
            "fit": "contain",
            "hideLabel": false
          },
          "imageAspect": "aspect-[4/3]",
          "imageTall": false
        },
        {
          "type": "bullets",
          "label": "Key learnings:",
          "title": "Key learnings:",
          "bullets": [
            "Use multimeters to confirm nominal voltage is actually being delivered at each known point",
            "Boost converters are extremely using for increasing torque. It was initially intimidating because it has the capability of drawing high current at significant voltage boost levels due to energy conservation. Stalling a motor post-boost converter would be a guaranteed popped fuse at best.",
            "Having 2 sets of batteries, one being charged and one being utilized was an ideal setup. Thanks to Karthik for the knowledge there.",
            "Do not plug battery + into the ground rail"
          ]
        },
        {
          "type": "pdf",
          "label": "Full Electrical Design:",
          "title": "Full Electrical Design:",
          "src": "/docs/kicad-schematic-v2.pdf"
        }
      ]
    },
    "software": {
      "eyebrow": "Software Design",
      "title": "Software",
      "description": "",
      "blocks": [
        {
          "type": "carousel",
          "label": "Finite State Machines",
          "title": "Navigation FSMs",
          "description": "",
          "slides": [
            {
              "title": "Navigation Architecture",
              "text": "Our overall navigation software is built around a finite state machine. At the top level, the robot progresses through three major phases: escaping the starting box, following tape until the hog line, firing, and returning to the starting area. Each of these phases is implemented as its own stage function, and the full FSM advances only when the current stage reports completion.\n\n    We chose this design because it made the robot’s behavior much easier to reason about. Instead of mixing all navigation logic together, each state had one clear responsibility and one clear completion condition. This also made it easy to reset the run, stop the motors safely, and fine-tune specific transitions without affecting unrelated behaviors.",
              "image": {
                "src": "/images/report/top-level-fsm.jpg",
                "alt": "Top level finite state machine diagram",
                "label": "Top Level FSM",
                "caption": "",
                "fit": "contain",
                "hideLabel": false
              }
            },
            {
              "title": "Escape from the Starting Box",
              "text": "The box escape routine was implemented as its own local finite state machine because it required the robot to combine ultrasonic sensing, tape sensing, and recovery logic in a structured way. Rather than simply driving forward and hoping to find the exit, the robot first scans for an open direction using the ultrasonic sensor. Once it detects a sufficiently large open path, it begins driving forward. If the tape sensors detect a candidate line, the robot transitions into an alignment routine to center itself on that tape before deciding whether the line is actually the exit.\n\n    A key software design choice in this stage was separating “finding tape” from “verifying exit.” After aligning to a detected tape line, the robot checks the ultrasonic sensor again to determine whether the line corresponds to an actual opening or whether a wall is still directly ahead. If the wall is still too close, the robot rejects that line, backs up, turns away, and resumes scanning. This prevented the robot from committing too early to a false exit cue. We also added a watchdog-style stuck recovery state: if the ultrasonic reading stopped changing for too long, the software assumed the robot was jammed in a corner or stalled against a boundary and triggered a backup maneuver before retrying the scan. This made the escape routine much more robust in practice.",
              "image": {
                "src": "/images/report/escape-box-fsm.jpg",
                "alt": "Escape box FSM diagram",
                "label": "Escape Box FSM",
                "caption": "",
                "fit": "contain",
                "hideLabel": false
              }
            },
            {
              "title": "Follow to Hogline",
              "text": "The follow-to-hog-line behavior was also implemented as its own FSM rather than one continuous controller. The robot first performs a timed turn to intercept the expected tape path, then drives forward until the tape sensors register the line. After this initial intercept, it performs a square-up turn to better align its body with the tape, and only then transitions into steady-state line following.\n\n    This design made the behavior easier to tune because intercepting the line and following the line are actually different control problems. The intercept phase is more geometric and timing-based, while the follow phase depends on continuous sensor feedback. By separating them, we could tune the intercept angle, forward approach timing, and square-up turn independently from the line-following controller itself. Once in the follow state, the robot uses the inner tape sensors for nominal correction and the outer sensors for stronger steering adjustments. The hog line is only declared when the sensor pattern strongly indicates a true line crossing, which reduced false positives and made the eventual firing transition much more reliable.",
              "image": {
                "src": "/images/report/follow-to-hogline-fsm.jpg",
                "alt": "Follow to hogline FSM diagram",
                "label": "Follow to Hogline FSM",
                "caption": "",
                "fit": "contain",
                "hideLabel": false
              }
            },
            {
              "title": "Fire Stage",
              "text": "Start → Reversing → Fire Stepper → Fire Done",
              "image": {
                "src": "/images/report/fire-fsm.jpg",
                "alt": "Fire FSM diagram",
                "label": "Fire FSM",
                "caption": "",
                "fit": "contain",
                "hideLabel": false
              }
            },
            {
              "title": "Return to Start",
              "text": "The return-to-start behavior was designed as a staged sequence of timed turns, line-guided motion, and wall-based stopping conditions. After the hog line routine finishes, the robot turns 180 degrees, follows the tape toward the first wall, turns 90 degrees, drives toward the second wall, turns 90 degrees again, and then reverses into the starting area. Structuring this as a return FSM made the path home much easier to understand and tune than if it had been implemented as a single long timed routine.\n\n    One of the most important design choices here was using different sensing strategies for different parts of the return path. Where the tape provided a strong directional reference, we reused the line-following controller instead of relying purely on dead reckoning. Where the robot needed to know when it had reached a boundary, we used ultrasonic thresholds to detect proximity to the wall. This hybrid strategy gave the robot more reliability than a purely timed approach, while still keeping the logic relatively simple. The final reverse into the start area was also implemented as an explicit state, making the ending condition clear and ensuring the robot fully completed the cycle before stopping.",
              "image": {
                "src": "/images/report/return-to-start-fsm.jpg",
                "alt": "Return to start FSM diagram",
                "label": "Return to Start FSM",
                "caption": "",
                "fit": "contain",
                "hideLabel": false
              }
            }
          ]
        },
        {
          "type": "split",
          "label": "Motor Control",
          "title": "Motor Control",
          "text": "We wrote a small motor abstraction layer to simplify driving the robot. At the lowest level, the code handles PWM clamping, left and right motor direction control, and helper functions like motorsTank(), motorsStop(), and safeMotorsTank(). This lets us express high-level behaviors such as “drive forward,” “spin in place,” or “reverse” cleanly and consistently.\n\n    A particularly helpful safeguard was the TEST_ENABLE_MOTORS flag. This made it possible to run software logic and sensor code without physically moving the robot, which was especially useful while debugging serial output and validating FSM transitions. Once the logic looked correct, we could enable motion and test the physical behavior.",
          "bullets": [],
          "image": {
            "src": "/images/report/motor-code.png",
            "alt": "Motor control code snippet",
            "label": "Motor Control Code",
            "caption": "",
            "fit": "contain"
          },
          "reverse": true,
          "imageAspect": "aspect-[4/3]",
          "imageTall": false
        },
        {
          "type": "split",
          "label": "Tape Sensors and Line Following",
          "title": "Tape Sensors and Line Following",
          "text": "For localization on the field, we used four tape sensors: outer-left, inner-left, inner-right, and outer-right. These are read as analog values and thresholded into a compact bitmask representation. This made it easy to classify what the robot was seeing at any moment and respond accordingly.\n\n    The line-following controller uses the two inner sensors for nominal tracking and the outer sensors for larger corrective actions when the robot drifts farther from center. We also added a small amount of memory through lastTapeSide, which stores the most recent side on which tape was seen.\n\n    We also implemented a debounced tape-crossing detector. Rather than triggering immediately on a noisy reading, the robot only accepts a crossing after multiple sensors have consistently detected tape for a fixed amount of time. This made the robot much less sensitive to spurious tape hits and improved reliability when identifying major field markers like the exit crossing and hog line.",
          "bullets": [],
          "image": {
            "src": "/images/report/tape-sensor-code.png",
            "alt": "Tape sensor bitmask and crossing detection code",
            "label": "Tape Sensor Code",
            "caption": "",
            "fit": "contain"
          },
          "imageAspect": "aspect-[4/3]",
          "imageTall": false
        },
        {
          "type": "split",
          "label": "Ultrasonic Sensing",
          "title": "Ultrasonic Sensing",
          "text": "We used an ultrasonic sensor as the main distance-based perception tool. The software pings the sensor periodically, converts echo time into centimeters, and then filters the readings using an exponential moving average. On top of that, we added hysteresis logic so that the robot would not rapidly flip between “near wall” and “clear path” due to noisy intermediate measurements.\n\n    This proved especially important during box escape and return-to-start behaviors, where the robot needs stable wall-distance estimates to make navigation decisions. We also treated timeouts as effectively “very far away,” which allowed the robot to interpret lack of return signal as open space rather than sensor failure.",
          "bullets": [],
          "image": {
            "src": "/images/report/ultrasonic-code.png",
            "alt": "Ultrasonic sensing code snippet",
            "label": "Ultrasonic Code",
            "caption": "",
            "fit": "contain"
          },
          "reverse": true,
          "imageAspect": "aspect-[4/3]",
          "imageTall": false
        },
        {
          "type": "split",
          "label": "Stepper / Swivel Testing",
          "title": "Stepper / Swivel Testing",
          "text": "Because the swivel motor was its own actuation subsystem, we also gave it dedicated test stages. One mode repeatedly stepped the motor in 90-degree increments, while another performed a one-time firing action and then shut the motor down. This let us verify pin mappings, step ordering, and motor enable behavior separately from navigation. Having isolated stepper tests was especially important because it prevented debugging motion control and debugging launcher actuation from interfering with one another.",
          "bullets": [],
          "image": {
            "src": "/images/report/stepper-motor-code.png",
            "alt": "Stepper motor test code snippet",
            "label": "Stepper Test Code",
            "caption": "",
            "fit": "contain"
          },
          "imageAspect": "aspect-[4/3]",
          "imageTall": false
        },
        {
          "type": "split",
          "label": "Testing Framework",
          "title": "Testing Framework",
          "text": "One of the most useful parts of our software architecture was the testing framework we built before integrating the full robot behavior. Rather than writing everything as one large control loop and debugging the entire system at once, we structured the program so that individual subsystems could be run in isolation through a STAGE_MODE switch. This allowed us to directly test tape sensing, ultrasonic sensing, timed turns, constant forward driving, swivel motor behavior, line following, box escape, and return-to-start logic without needing to run the full autonomous sequence every time.\n\n    This framework made debugging dramatically easier. We were able to validate each hardware subsystem independently, confirm that sensor readings were reasonable, and tune motion parameters step by step before composing them into the final routine. In practice, this saved a huge amount of time because it let us separate “sensor problems,” “motor problems,” and “state machine problems” instead of trying to diagnose all three simultaneously. It also made our code much more modular: once a stage worked on its own, it could be trusted as a building block inside the complete FSM.",
          "bullets": [],
          "image": {
            "src": "/images/report/testing-toggle-code.png",
            "alt": "Stage mode testing toggle code",
            "label": "Testing Toggle Code",
            "caption": "",
            "fit": "contain"
          },
          "imageAspect": "aspect-[4/3]",
          "imageTall": false
        },
        {
          "type": "bullets",
          "label": "Website Development",
          "title": "Website Development",
          "bullets": [
            "This website was also designed and coded in React + Tailwind 🙂!"
          ]
        },
        {
          "type": "bullets",
          "label": "Key Learnings",
          "title": "Key Learnings",
          "bullets": [
            "Software development takes more time and consideration when working with hardware. Even though the architecture of the code was very rigidly constructed before the hardware was completed, it still took time to refine the algorithms of escaping the box and line following",
            "Serial print statements save lots of time debugging"
          ]
        },
        {
          "type": "codeFile",
          "label": "Full Arduino Code",
          "title": "NavFSM_Boilerplate.ino",
          "description": "",
          "src": "/code/NavFSM_Boilerplate.ino"
        }
      ]
    },
    "bom": {
      "eyebrow": "Parts + Costing",
      "title": "Bill of Materials",
      "description": "",
      "blocks": [
        {
          "type": "table",
          "label": "",
          "title": "Lab Materials",
          "columns": [
            "Item",
            "Cost",
            "Componet Type",
            "Units",
            "Unit Total"
          ],
          "rows": [
            [
              "Transparent Acrylic Sheet (McMaster)",
              "$51.79",
              "Mechanical - chassis",
              "1",
              "$51.79"
            ],
            [
              "Steel Socket Head Screws 1/4-20, 1\" (box of 50)",
              "$12.36",
              "Mechanical - fasteners",
              "0.5",
              "$6.18"
            ],
            [
              "JameCo 12V DC Motor",
              "$15.00",
              "Mechanical - motor",
              "2",
              "$30.00"
            ],
            [
              "Stepper Motor",
              "$15.00",
              "Mechanical - motor",
              "1",
              "$15.00"
            ],
            [
              "Rubber Wheels 2in diameter",
              "$3.00",
              "Mechancial - wheels",
              "2",
              "$6.00"
            ],
            [
              "D-shaft 1/4\"",
              "$4.00",
              "Mechancial - wheels",
              "2",
              "$8.00"
            ],
            [
              "D-Shaft 1/4\" couplers w set screws",
              "$2.00",
              "Mechancial - wheels",
              "2",
              "$4.00"
            ],
            [
              "L298 Motor Driver",
              "$1.50",
              "Electronics - motor control",
              "2",
              "$3.00"
            ],
            [
              "Arduino Uno R3",
              "$32.00",
              "Electronic / software interface",
              "1",
              "$32.00"
            ],
            [
              "Jumper Wires (10 pack)",
              "$3.90",
              "Electronic connections",
              "3",
              "$11.70"
            ],
            [
              "7.4V Battery Pack",
              "$7.00",
              "Electronic - power",
              "2",
              "$14.00"
            ],
            [
              "PLA Material (3D printing) estimate",
              "$20.00",
              "Mechanical - chassis",
              "1",
              "$20.00"
            ],
            [
              "Buck Converter",
              "$5.00",
              "Electronics - motor control",
              "1",
              "$5.00"
            ],
            [
              "Tape Sensors",
              "$1.80",
              "Electronics - sensors",
              "4",
              "$7.20"
            ],
            [
              "Ultrasonic sensor",
              "$6.00",
              "Electronics - sensors",
              "1",
              "$6.00"
            ],
            [
              "Flange Ball Casters",
              "$4.00",
              "Mechancial - wheels",
              "2",
              "$8.00"
            ],
            [
              "Button / switch",
              "$0.20",
              "Electronic - power",
              "1",
              "$0.20"
            ],
            [
              "Breadboard",
              "$3.00",
              "Electronic - power",
              "3",
              "$9.00"
            ],
            [
              "Resistors",
              "$0.05",
              "Electronic - power",
              "10",
              "$0.50"
            ],
            [
              "Voltage Regulator",
              "$1.00",
              "Electronic - power",
              "5",
              "$5.00"
            ],
            [
              "Capacitors",
              "$0.10",
              "Electronic - power",
              "20",
              "$2.00"
            ]
          ],
          "footerLabel": "Total",
          "footerValue": "$244.57"
        }
      ]
    },
    "team": {
      "eyebrow": "People",
      "title": "People",
      "description": "",
      "blocks": [
        {
          "type": "team",
          "label": "People",
          "title": "Who built it",
          "members": [
            {
              "name": "Jackson Kennedy",
              "role": "Mechanical/Electrical",
              "bio": "Fourth-year PhD Student in Mechanical Engineering.",
              "linkLabel": "LinkedIn",
              "link": "https://www.linkedin.com/in/jacksonblaisekennedy",
              "image": "/images/report/jackson.png"
            },
            {
              "name": "Adam Boswell",
              "role": "Software",
              "bio": "3rd year Undergraduate Student in Computer Engineering",
              "linkLabel": "LinkedIn",
              "link": "https://www.linkedin.com/in/abboswell/",
              "image": "/images/report/adam.png"
            },
            {
              "name": "Brooke Ruzkiewicz",
              "role": "Mechanical",
              "bio": "4th year Undergraduate Student in Biomechanical Engineering",
              "linkLabel": "LinkedIn",
              "link": "https://www.linkedin.com/in/brooke-lauren-ruszkiewicz/",
              "image": "/images/report/brooke.png"
            },
            {
              "name": "Mason Matich",
              "role": "Mechanical/Software",
              "bio": "3rd Year Undergraduate Student in Mechanical Engineering",
              "linkLabel": "LinkedIn",
              "link": "https://www.linkedin.com/in/mason-matich/",
              "image": "/images/report/mason.png"
            }
          ]
        },
        {
          "type": "gallery",
          "label": "Team Moments",
          "title": "Team Moments",
          "description": "",
          "columns": 2,
          "items": [
            {
              "src": "/images/report/group-photo.jpg",
              "alt": "Team posing with the robot",
              "label": "",
              "caption": "",
              "hideLabel": true,
              "fit": "cover"
            },
            {
              "src": "/images/report/checkoff-celebration.png",
              "alt": "Team celebrating after checkoff",
              "label": "",
              "caption": "",
              "hideLabel": true,
              "fit": "cover"
            }
          ]
        }
      ]
    },
    "gems": {
      "eyebrow": "Final Reflections",
      "title": "Project Planning and Pivot",
      "description": "",
      "blocks": [
        {
          "type": "split",
          "label": "Project Planning and Pivot",
          "title": "Project Planning and Pivot",
          "text": "Our original design for this robot was wildly different than the final product described here. It relied on a Pinball machine pusher that was pulled back by a cable system with a ratchet to allow for variable distance control, a solenoid to release the ratchet pawl for firing, and a chain-driven elevator to load pucks. As described above, navigation was handled primarily by the sensor turret scanning for the IR beacons to determine the precise location of the robot in the playing field. This is obviously a very complicated design, in all domains, and the schedule for it left very little room for error.\n\nWhen an inevitable issue in the cable drive system was discovered in testing on the Tuesday before the deadline, the schedule got even tighter with our original design. Looking to the other teams for inspiration, we realized our robot was massively overcomplicated for the challenge, and we decided to redesign it with minimal complexity. We determined multiple line following sensors and an ultrasonic distance sensor would be sufficient for navigation in the arena, and that a ramp and simple carousel magazine would provide enough travel on the board that we would be able to get a puck in the bullseye from behind the hogline. We were able to turn around a complete robot design in about 24 hours, and manufacture, assemble, program, and test it in 36 hours.",
          "bullets": [],
          "image": {
            "src": "/images/report/old1.png",
            "alt": "Original robot design with IR beacon and chassis designed to hold pinball machine pusher",
            "label": "Original Design",
            "caption": ""
          }
        },
        {
          "type": "split",
          "label": "Redesign Outcome",
          "title": "Redesign Outcome",
          "text": "While perhaps not the most aesthetically pleasing design among our peers this year, the removal of almost all points of failure in hardware made writing our driving algorithm very straightforward. As long as we had recently charged batteries, we could get away with open loop control of the motors for simple rotate-in-place maneuvers with ~1 degrees of precision, which made it much easier to write a deterministic state machine for navigation and puck firing. Our robot was exceptionally reliable during testing and the competition, returning to the starting zone for reloading successfully all three times, and delivering almost all pucks into the target zone on every attempt (a few rolled instead of slid on the ramp caused by lower torque on the magazine carousel with depleted batteries).\n\nWhile the end product proved reliable and efficient, the cost was a marathon 26 hour work session from ~9am Thursday until 11am Friday, only five hours before the deadline. Extreme simplification of the design allowed us to buy down risk before printing components, but even minor errors in the design or assembly of the robot would have easily put us past the deadline accounting for printing time.\n\nThe big lesson here is two-fold: make the simplest part/assembly that accomplishes the goal, and budget enough time for testing and revisions for the level of complexity. Our original design, while much more advanced than the final product, was overkill for the task and created many edge cases in hardware and software that would have required several days of testing and calibration. We budgeted only a few days for assembly and testing, allowing only enough time to resolve minor issues. With the benefit of hindsight, our original design would likely have not worked reliably and deterministically within the provided two week window. All of this should have been a red flag during planning. Our final design was a significantly better fit for the challenge, and we could have easily achieved it within two weeks without any extremely long work sessions had we started with it. The struggle to avoid overengineering is a challenge shared by most teams in the class, and hopefully the lessons above can provide good guidance when new teams set out to design their robot. To throw in a bonus lesson, it’s much harder to change/add things to a mostly completed design compared to the initial design phase, spend the extra time thinking about what you may need or problems you may run into and tackle them right at the beginning of the process. Your bodge fixes will take up a lot more time down the line, and their quality will always be worse.",
          "bullets": [],
          "image": {
            "src": "/images/report/new-design1.png",
            "alt": "Final re-designed droid with acrylic ramp and puck loading magazine driven by stepper motor",
            "label": "Final Re-design",
            "caption": "",
            "fit": "contain"
          },
          "reverse": true
        },
        {
          "type": "gallery",
          "label": "Figure 1",
          "title": "Figure 1: Original robot design with IR beacon and chassis designed to hold pinball machine pusher",
          "description": "",
          "columns": 2,
          "items": [
            {
              "src": "/images/report/old1.png",
              "alt": "Original robot design prototype view 1",
              "label": "Original Design View 1",
              "caption": ""
            },
            {
              "src": "/images/report/old2.png",
              "alt": "Original robot design prototype view 2",
              "label": "Original Design View 2",
              "caption": ""
            }
          ]
        },
        {
          "type": "gallery",
          "label": "Figure 2",
          "title": "Figure 2: Final re-designed droid with acrylic ramp and puck loading magazine driven by stepper motor.",
          "description": "",
          "columns": 2,
          "items": [
            {
              "src": "/images/report/new-design1.png",
              "alt": "Final re-designed droid view 1",
              "label": "Final Design View 1",
              "caption": ""
            },
            {
              "src": "/images/report/new-design2.png",
              "alt": "Final re-designed droid view 2",
              "label": "Final Design View 2",
              "caption": ""
            }
          ]
        },
        {
          "type": "gallery",
          "label": "Table 1",
          "title": "Table 1: comparison of major component changes from original design to final design",
          "description": "",
          "columns": 1,
          "items": [
            {
              "src": "/images/report/main-changes.png",
              "alt": "Comparison of major component changes from original design to final design",
              "label": "Major Component Changes",
              "caption": ""
            }
          ]
        }
      ]
    }
  },
  "footer": {
    "text": "Built as a flexible React + Tailwind final report template with a curling-inspired visual system."
  }
};
