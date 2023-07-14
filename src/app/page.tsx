"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Store, PlayArrow } from "@mui/icons-material";

const App = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <div className="bg-white flex w-full p-4 items-center justify-around sticky top-0 z-10">
        <Image
          className="rounded-[5px]"
          src="/logo.jpg"
          alt="Download from App Store"
          width={60}
          height={60}
        />
        <div className="flex items-end justify-center">
          <Link href="#" className="mx-5">
            Emotions
          </Link>
          <Link href="#" className="mx-5">
            Manifesto
          </Link>
          <Link href="#" className="mx-5">
            Self-awareness test
          </Link>
          <Link href="#" className="mx-5">
            Work With Us
          </Link>
        </div>
        <div className="flex items-center justify-center px-4 py-2.5 rounded-[10rem] cursor-pointer bg-[#020102] text-white">
          Download App
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="rounded-[33px]"
          src="/intro-bg.png"
          alt="App"
          width={1250}
          height={100}
        />
      </div>

      {/* Three Columns */}
      <div className="flex items-center justify-center mt-36 w-[82%]">
        <Grid container spacing={2} className="">
          <Grid item xs={12} sm={4} className="mr-3">
            <Typography
              variant="h4"
              component="h2"
              style={{ fontWeight: "bold" }}
            >
              EQ beats IQ
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3.5} className="ml-1">
            <Typography variant="body1" component="p" className="text-lg">
              People with high emotional intelligence(EQ) live more fulfilled
              lives. They tend to be happier and have healthier relationships.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3.5} className="ml-10">
            <Typography variant="body1" component="p" className="text-lg">
              They are more successful in their pursuits and make for inspiring
              leaders. Accoding to science they earn $29k a year.
            </Typography>
          </Grid>
        </Grid>
      </div>
      {/* Cards */}
      <div className="flex flex-col w-full my-60 bg-red-200">
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h3"
            component="h2"
            className="mb-2 mx-20 font-semibold"
          >
            Does this sound familiar...
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="rounded-[20px]">
                  <CardContent className="flex flex-col items-start bg-[#efe9f9]">
                    <Image
                      src={"/angry-face.png"}
                      alt={""}
                      width={30}
                      height={30}
                    />
                    <Typography variant="h6" component="h5">
                      You argue with a colleague
                    </Typography>
                    <Typography variant="body2" component="p">
                      You get angry and defensive, instead of staying open and
                      working towards common around
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={3} className="-rotate-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="rounded-[20px]">
                  <CardContent className="flex flex-col items-start bg-[#6441eb] text-white">
                    <Image
                      src={"/flushed-face.png"}
                      alt={""}
                      width={30}
                      height={30}
                    />
                    <Typography variant="h6" component="h3">
                      You get a promotion at work
                    </Typography>
                    <Typography variant="body2" component="p">
                      You question yourself and wonder when they&apos;ll realize
                      you&apos;re an unqualified imposter, instead of trusting
                      yourself & your abilities.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="rounded-[20px]">
                  <CardContent className="flex flex-col items-start bg-[#ffeed3]">
                    <Image
                      src={"/face-with-raised-eyebrow.png"}
                      alt={""}
                      width={30}
                      height={30}
                    />
                    <Typography variant="h6" component="h3">
                      You attend a class reunion
                    </Typography>
                    <Typography variant="body2" component="p">
                      You compare yourself with your peers achievements, instead
                      of making your self-judgement more independent of
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="rounded-[20px]">
                  <CardContent className="flex flex-col items-start bg-[#fff9e8]">
                    <Image
                      src={"/unamused-face.png"}
                      alt={""}
                      width={30}
                      height={30}
                    />
                    <Typography variant="h6" component="h3">
                      You are at a lively dinner party
                    </Typography>
                    <Typography variant="body2" component="p">
                      You play on your phone, instead of confidently approaching
                      strangers and striking up a chat.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="rounded-[20px]">
                  <CardContent className="flex flex-col items-start bg-[#f2f7f3]">
                    <Image
                      src={"/grimacing-face.png"}
                      alt={""}
                      width={30}
                      height={30}
                    />
                    <Typography variant="h6" component="h3">
                      You hit dead end in a negotiation
                    </Typography>
                    <Typography variant="body2" component="p">
                      You get nervous frazzled, and frustrated instead of
                      staying optimistic and solution-oriented
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
