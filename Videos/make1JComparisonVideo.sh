rm 1JbetaComparison.mp4 

ffmpeg -i 1Jb5500.mp4 -vf tpad=stop_mode=clone:stop_duration=5 1Jb5500_stop.mp4
ffmpeg -i 1Jb5500_stop.mp4 -vf drawtext="fontfile=/path/to/font.ttf:text='(b)': fontcolor=white: fontsize=24: box=1: boxcolor=black: x=10: y=15" -codec:a copy 1Jb5500_label.mp4

ffmpeg -i 1Jb15.mp4 -vf tpad=stop_mode=clone:stop_duration=5 1Jb15_stop.mp4
ffmpeg -i 1Jb15_stop.mp4 -vf drawtext="fontfile=/path/to/font.ttf:text='(a)': fontcolor=white: fontsize=24: box=1: boxcolor=black: x=10: y=15" -codec:a copy 1Jb15_label.mp4

ffmpeg -i 1Jb15_label.mp4 -i 1Jb5500_label.mp4 -filter_complex "[0]pad=iw+50:color=#0A0C1A[left];[left][1]hstack=inputs=2" 1JbetaComparison.mp4

rm *_label.mp4 *_stop.mp4
