import React from "react";

import s from "./Logo.module.css";

interface ILogo {
  color: string;
  size: number;
}

const Logo = ({ color, size }: ILogo) => {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 451 220"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M204.748 1.37949C192.482 4.04616 181.948 8.44616 170.482 16.0462C155.282 26.1795 146.882 39.3795 155.015 40.5795C157.148 40.8462 159.948 38.8462 164.882 33.6462C174.748 23.2462 184.082 17.5128 197.282 13.6462C212.215 9.24616 225.682 8.17949 238.215 10.0462C261.015 13.6462 275.948 20.8462 287.815 33.9128C294.348 41.2462 298.748 42.7128 300.215 38.1795C301.148 35.1128 297.415 29.3795 289.282 21.7795C282.615 15.3795 265.015 6.31282 253.682 3.24616C241.282 -0.220509 216.615 -1.02051 204.748 1.37949Z"
          fill={color}
        />
        <path
          d="M192.748 28.3128C186.082 30.3128 176.215 39.5128 174.882 45.2462C174.348 47.2462 172.482 48.9795 169.548 50.0462C167.148 50.8462 163.015 53.1128 160.348 54.8462C155.415 58.1795 155.282 58.1795 122.215 58.1795H88.8816V65.5128V72.8462H116.882C132.348 72.8462 144.882 72.9795 144.882 73.1128C144.882 73.3795 143.682 76.4462 142.348 80.1795C140.348 85.5128 139.282 86.8462 136.748 86.8462C119.415 86.8462 85.9482 84.3128 81.5482 82.7128C77.8149 81.2462 71.9482 80.8462 61.5482 81.1128L46.8816 81.5128L46.4816 90.8462C46.2149 95.9128 46.6149 101.38 47.4149 102.846C48.0816 104.313 49.2816 107.646 50.0816 110.18C50.7482 112.713 53.5482 121.913 56.2149 130.58L61.0149 146.313L66.6149 145.913L72.0816 145.513L73.6816 138.18C75.1482 131.113 82.2149 104.58 82.7482 103.78C83.0149 103.646 94.2149 105.913 107.815 108.846C121.548 111.78 133.548 114.18 134.748 114.18C137.948 114.18 137.415 121.38 133.682 127.913C129.015 136.046 127.015 148.313 128.748 159.38C130.615 170.98 133.148 176.98 139.015 183.513C143.282 188.18 143.682 189.113 142.082 190.98C140.482 192.98 141.015 193.78 145.948 198.18C149.015 200.98 153.148 203.646 155.015 204.046C157.015 204.58 160.348 206.713 162.482 208.98C167.548 213.913 175.015 217.913 181.815 218.98C192.882 220.713 205.415 213.913 207.015 205.246C207.815 201.38 207.548 200.98 204.082 200.58C201.015 200.313 199.682 200.98 197.548 204.18C192.348 211.646 180.482 211.913 172.215 204.713C169.682 202.446 167.282 199.513 166.882 198.18C166.348 196.58 164.348 195.38 161.015 194.846C155.815 194.046 147.548 189.646 147.548 187.913C147.548 187.246 148.082 186.046 148.748 184.98C149.682 183.646 148.882 181.646 146.215 178.313C135.148 164.58 134.082 143.513 143.682 130.18C147.148 125.513 147.548 123.78 147.548 115.246C147.548 101.78 149.815 89.5128 153.682 80.8462C157.548 72.4462 160.615 68.8462 168.482 63.3795L174.215 59.3795L179.948 65.5128L185.815 71.5128H195.415C204.615 71.5128 205.015 71.3795 206.348 67.7795C209.415 59.9128 209.282 57.2462 206.082 56.4462C203.948 55.9128 202.215 56.7128 199.415 59.6462C195.015 64.3128 191.415 64.0462 186.615 58.7128C182.082 53.7795 182.482 47.2462 187.548 42.9795C194.482 37.1128 204.348 35.5128 212.082 38.7128C221.282 42.5795 220.882 37.7795 220.882 129.113V211.513H226.215H231.548V129.113C231.548 38.7128 231.148 43.2462 239.548 38.8462C247.148 34.9795 259.815 37.1128 266.082 43.3795C270.082 47.3795 269.948 55.9128 265.548 60.1795C261.415 64.4462 256.215 64.4462 252.348 60.1795C249.015 56.5795 245.148 55.7795 244.082 58.5795C243.815 59.5128 244.348 62.5795 245.282 65.5128C246.882 70.1795 247.815 70.9795 252.348 71.6462C262.748 73.3795 271.682 70.0462 275.415 62.9795C277.148 59.7795 277.415 59.7795 281.148 61.6462C287.282 64.8462 295.548 72.8462 298.348 78.5795C302.215 86.1795 304.882 99.7795 304.882 112.98C304.882 123.913 305.148 124.98 309.415 131.38C314.615 138.98 316.215 146.713 315.148 157.646C314.348 164.846 309.148 176.313 304.748 180.313C302.882 182.046 302.615 182.98 303.815 184.846C305.015 186.713 305.015 187.78 303.415 189.646C301.148 192.446 294.082 195.513 289.948 195.513C287.815 195.513 286.348 196.713 285.148 199.513C279.815 211.38 258.882 213.913 253.415 203.38C251.948 200.313 250.482 199.513 247.282 199.513C243.415 199.513 243.282 199.78 244.082 203.78C246.615 216.18 265.148 223.246 279.015 216.98C282.082 215.646 286.482 212.446 289.015 209.913C291.548 207.513 296.348 204.446 299.682 203.113C307.682 200.046 312.348 195.246 310.482 192.046C309.415 190.046 310.215 188.446 314.215 183.78C317.015 180.58 320.348 175.246 321.548 171.78C326.615 156.98 325.148 136.713 318.348 126.313C314.082 119.913 314.215 114.58 318.748 113.513C323.415 112.446 368.482 104.846 369.948 104.846C371.015 104.846 376.348 123.513 379.682 139.246L381.148 146.313L386.615 145.913L392.082 145.513L395.282 135.513C405.148 104.446 406.348 99.2462 405.948 90.3128L405.548 81.5128L389.015 81.1128C376.348 80.8462 372.082 81.2462 370.348 82.5795C368.882 83.9128 362.615 84.7128 349.548 85.3795C339.282 85.7795 326.882 86.5795 321.948 86.9795C315.415 87.6462 312.882 87.3795 312.882 86.3128C312.882 85.3795 311.682 82.1795 310.215 79.2462C308.748 76.1795 307.548 73.5128 307.548 73.2462C307.548 72.9795 319.815 72.8462 334.882 72.8462H362.215V65.5128V58.1795H329.682H297.282L288.215 53.3795C281.015 49.6462 278.615 47.6462 276.882 43.7795C273.948 37.2462 265.015 29.3795 258.615 27.6462C248.215 24.7128 237.148 26.5795 230.215 32.3128L226.215 35.7795L222.215 32.3128C214.882 26.1795 204.215 24.7128 192.748 28.3128Z"
          fill={color}
        />
        {/* left line */}
        <path
          d="M124.215 28.4462C121.282 28.7129 109.548 30.0462 98.2149 31.3796C86.8815 32.8462 73.0149 34.0462 67.5482 34.0462C58.3482 34.1796 56.4815 34.8462 55.2815 38.5796C55.0149 39.1129 47.6815 40.7129 38.8815 42.1796C14.3482 46.3129 0.881531 49.1129 0.0815307 50.4462C-0.451803 51.2462 1.68153 51.3796 5.01486 50.9796C8.21486 50.5796 17.8149 49.2462 26.2149 48.1796C34.6149 47.1129 44.4815 45.9129 48.0815 45.3796C53.2815 44.5796 54.7482 44.8462 55.8149 46.5796C56.7482 48.3129 59.0149 48.8462 64.8815 48.8462C71.9482 48.8462 72.7482 48.5796 73.1482 45.9129C73.5482 43.2462 76.2149 42.4462 103.948 36.4462C120.615 32.7129 134.215 29.2462 134.215 28.5796C134.215 28.0462 133.148 27.6462 131.948 27.7796C130.615 27.9129 127.148 28.1796 124.215 28.4462Z"
          fill={color}
        />
        {/* Right line */}
        <path
          d="M321.682 28.7129C322.615 29.6462 361.282 39.6462 376.615 42.9796C378.482 43.3796 379.548 44.5796 379.548 46.1796C379.548 48.5796 380.482 48.8462 387.548 48.8462C393.282 48.8462 395.682 48.3129 396.615 46.7129C397.682 44.8462 399.815 44.9796 418.348 47.5129C429.682 48.9796 441.415 50.5796 444.615 50.9796C447.815 51.3796 450.215 51.1129 450.215 50.3129C450.215 48.9796 443.015 47.2462 428.082 44.8462C405.682 41.3796 397.148 39.2462 396.482 36.8462C396.082 35.2462 393.948 34.3129 388.215 33.6462C383.282 33.1129 380.082 33.2462 379.548 34.1796C379.015 35.1129 376.482 35.1129 371.415 34.1796C364.348 32.8462 324.882 27.5129 321.948 27.5129C320.882 27.5129 320.882 27.9129 321.682 28.7129Z"
          fill={color}
        />
        <path
          d="M47.1482 53.7796C46.6148 54.1796 46.2148 58.4463 46.2148 63.1129V71.5129H64.2148H82.2148V62.9796C82.2148 56.4463 81.6815 54.3129 80.0815 53.6463C77.2815 52.5796 48.2148 52.5796 47.1482 53.7796Z"
          fill={color}
        />
        <path
          d="M371.548 53.9128C370.748 54.1795 370.215 58.1795 370.215 62.9795C370.215 73.2462 369.948 73.1128 390.882 72.5795L405.548 72.1795L405.948 63.1128C406.348 55.2462 406.082 54.1795 403.948 54.0462C395.948 53.6462 372.615 53.6462 371.548 53.9128Z"
          fill={color}
        />
        <path
          d="M172.215 79.9128C167.548 84.5795 166.748 87.1128 167.415 96.5795C167.681 100.313 166.881 101.779 162.481 105.513C158.881 108.713 156.748 111.779 155.815 115.779C152.881 127.379 159.148 140.046 165.815 135.779C167.015 134.979 166.881 133.379 165.281 128.713C163.948 124.979 163.415 121.379 164.081 118.979C165.281 113.913 171.148 108.846 175.815 108.846C178.615 108.846 180.081 107.913 181.148 105.513C182.481 102.713 182.215 101.646 179.815 99.1128C175.815 94.9795 176.081 88.7128 180.215 83.7795C183.548 79.7795 183.415 79.1128 178.481 76.3128C177.415 75.6462 175.015 77.1128 172.215 79.9128Z"
          fill={color}
        />
        <path
          d="M271.281 77.6461C269.281 79.6461 269.415 80.1795 272.481 84.7128C276.215 90.1795 275.948 95.7794 271.681 100.046C268.081 103.513 270.481 108.846 275.548 108.846C280.481 108.846 285.681 113.246 287.548 118.846C288.748 122.713 288.615 124.313 286.481 129.246C283.948 135.113 283.948 135.113 286.615 136.713C288.881 138.179 289.681 137.913 292.748 134.979C295.815 131.913 296.215 130.313 296.215 122.446C296.215 112.713 293.548 107.113 287.148 103.646C284.215 102.179 283.948 101.113 284.081 94.1795C284.215 86.0461 281.948 81.2461 276.081 77.3795C273.815 75.7794 273.148 75.9128 271.281 77.6461Z"
          fill={color}
        />
        <path
          d="M243.415 89.6461C241.948 91.3795 242.082 92.1795 243.548 94.5795C244.615 96.1795 245.815 100.446 246.215 104.179C246.882 110.579 247.015 110.846 251.282 111.246C255.548 111.646 255.548 111.646 255.548 105.513C255.548 98.1795 252.748 90.8461 249.148 88.9795C245.682 87.1128 245.548 87.1128 243.415 89.6461Z"
          fill={color}
        />
        <path
          d="M200.882 92.1796C198.482 94.7129 197.815 96.9796 197.682 103.113L197.548 110.846L201.948 111.246C206.082 111.646 206.215 111.513 206.215 106.313C206.215 103.513 207.282 99.2462 208.615 96.8462C210.748 92.8462 210.748 92.5796 208.348 90.8462C204.882 88.1796 204.482 88.3129 200.882 92.1796Z"
          fill={color}
        />
        <path
          d="M200.881 133.113C194.215 137.646 191.015 142.579 192.081 146.713C192.748 149.246 193.815 150.179 196.215 150.179C198.081 150.179 199.548 149.513 199.548 148.713C199.548 147.913 202.348 144.713 205.681 141.646C211.415 136.313 211.681 135.779 210.081 133.113C207.815 129.379 206.348 129.513 200.881 133.113Z"
          fill={color}
        />
        <path
          d="M241.548 132.98C240.215 136.846 255.015 151.246 258.082 149.246C260.882 147.513 261.548 142.58 259.282 139.913C257.015 137.113 246.215 130.18 244.082 130.18C243.148 130.18 241.948 131.38 241.548 132.98Z"
          fill={color}
        />
        <path
          d="M151.815 149.113C149.281 151.646 149.948 153.379 154.215 156.713C156.481 158.313 159.681 162.846 161.415 166.579C169.948 185.513 191.815 190.979 205.948 177.779C210.882 173.113 211.415 169.513 207.548 167.513C205.148 166.313 203.948 166.713 200.082 170.046C194.615 174.846 190.481 176.179 183.815 175.113C177.281 174.046 170.615 166.846 169.415 159.513C168.615 154.579 167.948 153.779 161.548 150.846C153.548 146.979 153.948 146.979 151.815 149.113Z"
          fill={color}
        />
        <path
          d="M293.548 148.846C293.148 149.513 290.348 150.846 287.548 151.646C282.882 153.113 282.215 153.78 282.215 157.113C282.215 174.18 262.882 181.513 250.082 169.38C246.882 166.313 246.215 166.18 243.682 167.78C240.082 169.913 240.215 170.713 244.348 176.18C251.148 185.246 269.282 187.646 280.082 180.98C284.748 178.046 291.548 166.713 291.548 161.913C291.548 160.58 292.082 159.513 292.748 159.513C293.415 159.513 295.948 157.913 298.215 156.046C302.082 152.713 302.215 152.446 300.082 150.046C297.548 147.246 294.882 146.713 293.548 148.846Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Logo;
