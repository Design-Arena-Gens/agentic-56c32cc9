'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [scene, setScene] = useState(0)
  const [showJumpscare, setShowJumpscare] = useState(false)

  useEffect(() => {
    const timers = [
      setTimeout(() => setScene(1), 2000),
      setTimeout(() => setScene(2), 5000),
      setTimeout(() => setScene(3), 8000),
      setTimeout(() => setScene(4), 11000),
      setTimeout(() => setScene(5), 14000),
      setTimeout(() => {
        setShowJumpscare(true)
        setTimeout(() => setShowJumpscare(false), 500)
      }, 17000),
      setTimeout(() => setScene(6), 17500),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.scanlines}></div>
      <div className={styles.vignette}></div>

      {showJumpscare && (
        <div className={styles.jumpscare}>
          <div className={styles.jumpscareText}>👻</div>
        </div>
      )}

      <div className={styles.videoFrame}>
        {scene >= 0 && (
          <div className={`${styles.scene} ${scene === 0 ? styles.active : ''}`}>
            <div className={styles.staticNoise}></div>
            <div className={styles.title}>
              <h1 className={styles.glitchText}>HALLOWEEN FIT CHECK</h1>
              <p className={styles.subtitle}>⚠️ WARNING: SCARY CONTENT ⚠️</p>
            </div>
          </div>
        )}

        {scene >= 1 && (
          <div className={`${styles.scene} ${scene === 1 ? styles.active : ''}`}>
            <div className={styles.character}>
              <div className={styles.silhouette}>
                <div className={styles.head}></div>
                <div className={styles.body}></div>
                <div className={styles.leftArm}></div>
                <div className={styles.rightArm}></div>
              </div>
              <div className={styles.caption}>
                <p className={styles.captionText}>Let me show you...</p>
              </div>
            </div>
          </div>
        )}

        {scene >= 2 && (
          <div className={`${styles.scene} ${scene === 2 ? styles.active : ''}`}>
            <div className={styles.character}>
              <div className={`${styles.silhouette} ${styles.reveal}`}>
                <div className={styles.head}>
                  <div className={styles.eyes}>
                    <div className={styles.eye}></div>
                    <div className={styles.eye}></div>
                  </div>
                </div>
                <div className={styles.body}>
                  <div className={styles.dress}></div>
                </div>
                <div className={styles.leftArm}></div>
                <div className={styles.rightArm}></div>
              </div>
              <div className={styles.caption}>
                <p className={styles.captionText}>My Halloween outfit... 🎃</p>
              </div>
            </div>
          </div>
        )}

        {scene >= 3 && (
          <div className={`${styles.scene} ${scene === 3 ? styles.active : ''}`}>
            <div className={styles.character}>
              <div className={`${styles.silhouette} ${styles.reveal} ${styles.detailed}`}>
                <div className={styles.head}>
                  <div className={styles.eyes}>
                    <div className={`${styles.eye} ${styles.glowing}`}></div>
                    <div className={`${styles.eye} ${styles.glowing}`}></div>
                  </div>
                  <div className={styles.mouth}></div>
                </div>
                <div className={styles.body}>
                  <div className={styles.dress}>
                    <div className={styles.dressDetails}></div>
                  </div>
                </div>
                <div className={styles.leftArm}></div>
                <div className={styles.rightArm}></div>
              </div>
              <div className={styles.caption}>
                <p className={styles.captionText}>Vintage gothic vibes ⚰️</p>
              </div>
            </div>
          </div>
        )}

        {scene >= 4 && (
          <div className={`${styles.scene} ${scene === 4 ? styles.active : ''}`}>
            <div className={`${styles.character} ${styles.spinning}`}>
              <div className={`${styles.silhouette} ${styles.reveal} ${styles.detailed}`}>
                <div className={styles.head}>
                  <div className={styles.eyes}>
                    <div className={`${styles.eye} ${styles.glowing}`}></div>
                    <div className={`${styles.eye} ${styles.glowing}`}></div>
                  </div>
                  <div className={styles.mouth}></div>
                </div>
                <div className={styles.body}>
                  <div className={styles.dress}>
                    <div className={styles.dressDetails}></div>
                  </div>
                </div>
                <div className={styles.leftArm}></div>
                <div className={styles.rightArm}></div>
              </div>
              <div className={styles.caption}>
                <p className={styles.captionText}>Watch me spin... 🌀</p>
              </div>
            </div>
          </div>
        )}

        {scene >= 5 && (
          <div className={`${styles.scene} ${scene === 5 ? styles.active : ''}`}>
            <div className={`${styles.character} ${styles.shaking}`}>
              <div className={`${styles.silhouette} ${styles.reveal} ${styles.detailed} ${styles.scary}`}>
                <div className={styles.head}>
                  <div className={styles.eyes}>
                    <div className={`${styles.eye} ${styles.glowing} ${styles.red}`}></div>
                    <div className={`${styles.eye} ${styles.glowing} ${styles.red}`}></div>
                  </div>
                  <div className={`${styles.mouth} ${styles.wide}`}></div>
                </div>
                <div className={styles.body}>
                  <div className={styles.dress}>
                    <div className={styles.dressDetails}></div>
                  </div>
                </div>
                <div className={styles.leftArm}></div>
                <div className={styles.rightArm}></div>
              </div>
              <div className={styles.caption}>
                <p className={`${styles.captionText} ${styles.scary}`}>But wait...</p>
              </div>
            </div>
          </div>
        )}

        {scene >= 6 && (
          <div className={`${styles.scene} ${styles.active}`}>
            <div className={styles.finalScene}>
              <h2 className={styles.finalText}>👻 BOO! 👻</h2>
              <p className={styles.finalCaption}>Happy Halloween! 🎃</p>
              <p className={styles.finalSubtext}>Did I scare you? 😈</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
