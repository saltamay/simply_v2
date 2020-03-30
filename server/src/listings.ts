/**
 * Listing Interface
 *
 * interface Listing {
 *  imgSrc: string;  // https://photos.zillowstatic.com/p_e/ISz3lmdrn0ddpj0000000000.jpg
 *  price: string;   // C$17,990,000
 *  hiResImageSrc;   // https://photos.zillowstatic.com/p_f/ISz3lmdrn0ddpj0000000000.jpg
 *  address: string; // 8 High Point Rd
 *  zipcode: string; // M3B2A4
 *  city: string;    // Toronto
 *  state: string;   // ON
 *  status: string;  // House for sale or FOR_SALE
 *  bedrooms: number;    // 7
 *  bathrooms: number;   // 15
 * }
 */

interface Listing {
  imgSrc: string;
  price: string;
  hiResImageSrc: string;
  address: string;
  zipcode: string;
  city: string;
  state: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
}

export const listings: Listing[] = [
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISz3lmdrn0ddpj0000000000.jpg',
    price: 'C$17,990,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISz3lmdrn0ddpj0000000000.jpg',
    address: '8 High Point Rd',
    zipcode: 'M3B2A4',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 7,
    bathrooms: 15
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS7y9wvtv0nu251000000000.jpg',
    price: 'C$13,000,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS7y9wvtv0nu251000000000.jpg',
    address: '38 Park Lane Cir',
    zipcode: 'M3C2N2',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 8,
    bathrooms: 10
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISvkjhc5on1s3n0000000000.jpg',
    price: 'C$5,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISvkjhc5on1s3n0000000000.jpg',
    address: '111 Bathurst St',
    zipcode: 'M5V0M9',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISn670xmsdxsjg1000000000.jpg',
    price: 'C$4,988,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISn670xmsdxsjg1000000000.jpg',
    address: '41 Broadleaf Rd',
    zipcode: 'M3B1C3',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 6
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISfkw6fxkxs9yv0000000000.jpg',
    price: 'C$5,888,888',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISfkw6fxkxs9yv0000000000.jpg',
    address: '28 Greengate Rd',
    zipcode: 'M3B1E8',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 7,
    bathrooms: 8
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISb1ry082i7l410000000000.jpg',
    price: 'C$2,020,888',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISb1ry082i7l410000000000.jpg',
    address: '55 Dennett Dr',
    zipcode: 'M1S2E8',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 5
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISvoa1dthjeq961000000000.jpg',
    price: 'C$7,300,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISvoa1dthjeq961000000000.jpg',
    address: '53 Hazelton Ave',
    zipcode: 'M5R2E3',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 3,
    bathrooms: 4
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISfw1fi1p3eha00000000000.jpg',
    price: 'C$3,958,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISfw1fi1p3eha00000000000.jpg',
    address: '365 Hillcrest Ave',
    zipcode: 'M2N3P9',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 7
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISfglfj4u8x5ga1000000000.jpg',
    price: 'C$1,399,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISfglfj4u8x5ga1000000000.jpg',
    address: '59 Gates Gill Cres',
    zipcode: 'M3M1Y1',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS3j3if7beb6os0000000000.jpg',
    price: 'C$3,998,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS3j3if7beb6os0000000000.jpg',
    address: '316 Warren Rd',
    zipcode: 'M5P2M8',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 6
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISn2cpk0681mjp1000000000.jpg',
    price: 'C$5,300',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISn2cpk0681mjp1000000000.jpg',
    address: '25 Oxley St',
    zipcode: 'M5V2J5',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISj3y3ukgm5wmo1000000000.jpg',
    price: 'C$4,500,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISj3y3ukgm5wmo1000000000.jpg',
    address: '500 Queens Quay W PENTHOUSE 1E',
    zipcode: 'M5V3K8',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 4,
    bathrooms: 4
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISnaq5xqsrzicz0000000000.jpg',
    price: 'C$2,900,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISnaq5xqsrzicz0000000000.jpg',
    address: '137 Johnston Ave',
    zipcode: 'M2N1H1',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 5
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISnykpbrtns17m1000000000.jpg',
    price: 'C$6,888,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISnykpbrtns17m1000000000.jpg',
    address: '36 Farrington Dr',
    zipcode: 'M2L2B6',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISbp1vfxp1r8401000000000.jpg',
    price: 'C$4,180,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISbp1vfxp1r8401000000000.jpg',
    address: '388 Yonge St UNIT 7910',
    zipcode: 'M5B0A4',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 3,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISr55l0kq8en8y0000000000.jpg',
    price: 'C$2,999,999',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISr55l0kq8en8y0000000000.jpg',
    address: '19 Reiner Rd',
    zipcode: 'M3H2L1',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 6,
    bathrooms: 8
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISrxi6cj6xhttl0000000000.jpg',
    price: 'C$5,299,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISrxi6cj6xhttl0000000000.jpg',
    address: '1 Proctor Cres',
    zipcode: 'M4N3G1',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 6,
    bathrooms: 5
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISbhvg2qx0n7q11000000000.jpg',
    price: 'C$2,498,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISbhvg2qx0n7q11000000000.jpg',
    address: '55 Merchants Wharf # 1223',
    zipcode: 'M5A0P2',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 3,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISrd74v0wa2m821000000000.jpg',
    price: 'C$3,750,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISrd74v0wa2m821000000000.jpg',
    address: '224 Hollywood Ave',
    zipcode: 'M2N3K6',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 7
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISbhjfpduipd7p0000000000.jpg',
    price: 'C$2,850,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISbhjfpduipd7p0000000000.jpg',
    address: '20 Deloraine Ave',
    zipcode: 'M5M2A7',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 5
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISfovcyw72hnw01000000000.jpg',
    price: 'C$699,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISfovcyw72hnw01000000000.jpg',
    address: '38 Dan Leckie Way # 1101',
    zipcode: 'M5V2V6',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 3,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISn6b75hwhlldr0000000000.jpg',
    price: 'C$4,490,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISn6b75hwhlldr0000000000.jpg',
    address: '93 Larkfield Dr',
    zipcode: 'M3B2H6',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 6,
    bathrooms: 8
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISblm0bokqu05d0000000000.jpg',
    price: 'C$848,800',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISblm0bokqu05d0000000000.jpg',
    address: '99 Cameron St # 707',
    zipcode: 'M5T3A2',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS33net1b6stae0000000000.jpg',
    price: 'C$749,900',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS33net1b6stae0000000000.jpg',
    address: '14 Bicknell Ave',
    zipcode: 'M6M4G3',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISf0taohlsdjyu1000000000.jpg',
    price: 'C$1,899,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISf0taohlsdjyu1000000000.jpg',
    address: '24 Ranee Ave',
    zipcode: 'M6A1M6',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 6,
    bathrooms: 5
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISvcdzf8s6a1hg1000000000.jpg',
    price: 'C$1,999,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISvcdzf8s6a1hg1000000000.jpg',
    address: '238 Combe Ave # M344K8',
    zipcode: 'M3H4K7',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 7,
    bathrooms: 5
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS760uho92jybl0000000000.jpg',
    price: 'C$999,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS760uho92jybl0000000000.jpg',
    address: '68 Monarch Park Ave',
    zipcode: 'M4J4P8',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 3,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS3jbwf3aanx0d1000000000.jpg',
    price: 'C$1,400,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS3jbwf3aanx0d1000000000.jpg',
    address: '29 Queens Quay E # 919',
    zipcode: 'M5E0A4',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 3,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISz31rr5xye6z70000000000.jpg',
    price: 'C$2,850,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISz31rr5xye6z70000000000.jpg',
    address: '1810 Lake Shore Blvd E',
    zipcode: 'M4L6S8',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 3,
    bathrooms: 4
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISv824xeydlldr0000000000.jpg',
    price: 'C$1,699,999',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISv824xeydlldr0000000000.jpg',
    address: '14 Gore St',
    zipcode: 'M6J2C6',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 3,
    bathrooms: 4
  },
  {
    imgSrc:
      'https://maps.googleapis.com/maps/api/staticmap?center=43.762513,-79.401306&zoom=17&size=575x242&maptype=satellite&key=AIzaSyBot9JtFX4Hqs-Ri6N3A8K1Rl5XZD3ssyI&signature=XRYK2nb6RWN89_P1ZF4F5NWu9Zg=',
    price: 'C$1,588,000',
    hiResImageSrc: 'https://www.zillowstatic.com/static/images/nophoto_p_f.png',
    address: '9 Craigmore Cres',
    zipcode: 'M2N2Y2',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISj36uj0psc63t1000000000.jpg',
    price: 'C$5,500,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISj36uj0psc63t1000000000.jpg',
    address: '22 Saint Thomas St # 10B',
    zipcode: 'M5S3E7',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISjbod1gafqdlp1000000000.jpg',
    price: 'C$609,900',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISjbod1gafqdlp1000000000.jpg',
    address: '53 Pitt Ave',
    zipcode: 'M1L2R3',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 2
  },
  {
    imgSrc:
      'https://maps.googleapis.com/maps/api/staticmap?center=43.761081,-79.384536&zoom=17&size=575x242&maptype=satellite&key=AIzaSyBot9JtFX4Hqs-Ri6N3A8K1Rl5XZD3ssyI&signature=LshUYR37772kKgGNqTX7lCbALTU=',
    price: 'C$10,890,000',
    hiResImageSrc: 'https://www.zillowstatic.com/static/images/nophoto_p_f.png',
    address: '22 Truman Rd',
    zipcode: 'M2L2L5',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 8
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS7ix7og8o6fol1000000000.jpg',
    price: 'C$1,649,900',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS7ix7og8o6fol1000000000.jpg',
    address: '668 Greenwood Ave',
    zipcode: 'M4J4B5',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 5
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISf8b2czeukn2o0000000000.jpg',
    price: 'C$4,850,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISf8b2czeukn2o0000000000.jpg',
    address: '26 Beechwood Ave',
    zipcode: 'M2L1J1',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 7
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISvw8h2pn6ucsy0000000000.jpg',
    price: 'C$8,600',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISvw8h2pn6ucsy0000000000.jpg',
    address: '175 Cumberland St',
    zipcode: 'M5R3M9',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISrllshwvoe9eq0000000000.jpg',
    price: 'C$49,990',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISrllshwvoe9eq0000000000.jpg',
    address: '101 Charles St E',
    zipcode: 'M4Y0A9',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISvoij8smprmr70000000000.jpg',
    price: 'C$1,269,900',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISvoij8smprmr70000000000.jpg',
    address: '219 Fort York Blvd UNIT LPH02',
    zipcode: 'M5V1B1',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS3jnh0z0s49881000000000.jpg',
    price: 'C$649,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS3jnh0z0s49881000000000.jpg',
    address: '2480 Saint Clair Ave W',
    zipcode: 'M6N1L3',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 3,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISbluejm2dx5z40000000000.jpg',
    price: 'C$2,498,900',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISbluejm2dx5z40000000000.jpg',
    address: '80 John Street Uph # 3',
    zipcode: 'M5V3X4',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS7i99xpevdckd0000000000.jpg',
    price: 'C$399,900',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS7i99xpevdckd0000000000.jpg',
    address: '150 Broadview Ave # 25',
    zipcode: 'M4M0A9',
    city: 'Toronto',
    state: 'ON',
    status: 'Townhouse for sale',
    bedrooms: 1,
    bathrooms: 1
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISj32vl7jezl7x1000000000.jpg',
    price: 'C$950,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISj32vl7jezl7x1000000000.jpg',
    address: '117 Campbell Ave',
    zipcode: 'M6P3V1',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISj32j85bwa4p31000000000.jpg',
    price: 'C$888,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISj32j85bwa4p31000000000.jpg',
    address: '71 Simcoe St # 1204',
    zipcode: 'M5J2S9',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISrpckkvhuf5kc1000000000.jpg',
    price: 'C$499,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISrpckkvhuf5kc1000000000.jpg',
    address: '52 A Rockcliffe Blvd # A',
    zipcode: 'M6N4R5',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 3,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISfonees52h1go1000000000.jpg',
    price: 'C$3,449,200',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISfonees52h1go1000000000.jpg',
    address: '128 Hazelton Ave',
    zipcode: 'M5R2E5',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISvkb7ztn5j2mh1000000000.jpg',
    price: 'C$6,300',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISvkb7ztn5j2mh1000000000.jpg',
    address: '29 Queens Quay Ave E',
    zipcode: 'M5E0A5',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISzzxl6ydqibv71000000000.jpg',
    price: 'C$1,899,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISzzxl6ydqibv71000000000.jpg',
    address: '31 Hexham Dr',
    zipcode: 'M1R1J5',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 5
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISbtsy78jq60q71000000000.jpg',
    price: 'C$3,280,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISbtsy78jq60q71000000000.jpg',
    address: '12 Browside Ave',
    zipcode: 'M5P2V1',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS3jro4ilctf2h1000000000.jpg',
    price: 'C$399,700',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS3jro4ilctf2h1000000000.jpg',
    address: '5 Shady Gfwy E # 211',
    zipcode: 'M3C3A5',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 3,
    bathrooms: 1
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISjjer7hnt40mu0000000000.jpg',
    price: 'C$699,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISjjer7hnt40mu0000000000.jpg',
    address: '139 Merton St # 230',
    zipcode: 'M4S3G7',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 1,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISbpl2be8h81d80000000000.jpg',
    price: 'C$6,380,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISbpl2be8h81d80000000000.jpg',
    address: '22 Strathearn Blvd',
    zipcode: 'M5P1S7',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 7
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISrtr6fj57llnr1000000000.jpg',
    price: 'C$1,199,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISrtr6fj57llnr1000000000.jpg',
    address: '116 Douglas Ave',
    zipcode: 'M5M1G6',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 3,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS7mglumwt6uqm1000000000.jpg',
    price: 'C$1,199,900',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS7mglumwt6uqm1000000000.jpg',
    address: '12 York St # 4704',
    zipcode: 'M5J0A9',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 3,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS3r59kho06jyz0000000000.jpg',
    price: 'C$599,900',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS3r59kho06jyz0000000000.jpg',
    address: '107 Chelsey Rd',
    zipcode: 'V2J6R4',
    city: 'Quesnel',
    state: 'BC',
    status: 'House for sale',
    bedrooms: 3,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISnysbip8tigue0000000000.jpg',
    price: 'C$1,399,900',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISnysbip8tigue0000000000.jpg',
    address: '60 Normandy Blvd',
    zipcode: 'M4L3K3',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 3,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS7uqeuos8114l0000000000.jpg',
    price: 'C$975,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS7uqeuos8114l0000000000.jpg',
    address: '25 Jersey Ave',
    zipcode: 'M6G3A4',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS7arpj1lfywmm0000000000.jpg',
    price: 'C$3,699,990',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS7arpj1lfywmm0000000000.jpg',
    address: '30 Chipping Rd',
    zipcode: 'M3B1L1',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 7,
    bathrooms: 7
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISnexxipocwhjd0000000000.jpg',
    price: 'C$865,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISnexxipocwhjd0000000000.jpg',
    address: '438 Richmond St W # 510',
    zipcode: 'M5V3S6',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISvspj019pv1nj1000000000.jpg',
    price: 'C$400,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISvspj019pv1nj1000000000.jpg',
    address: 'Social 117 Dundas St E',
    zipcode: 'M5B1E1',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 0,
    bathrooms: 0
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS7u67bt66gtx31000000000.jpg',
    price: 'C$1,039,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS7u67bt66gtx31000000000.jpg',
    address: '455 Front St E # S109',
    zipcode: 'M5A0G2',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 3,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISnqiii3x08tu00000000000.jpg',
    price: 'C$1,690,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISnqiii3x08tu00000000000.jpg',
    address: '15 Wiley Ave',
    zipcode: 'M4J3W3',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 4
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS3bxzm52razh60000000000.jpg',
    price: 'C$949,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS3bxzm52razh60000000000.jpg',
    address: '48 Wildwood Cres',
    zipcode: 'M4L2K7',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISrxiab1fkd4io1000000000.jpg',
    price: 'C$1,389,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISrxiab1fkd4io1000000000.jpg',
    address: '187 Three Valleys Dr',
    zipcode: 'M3A3L7',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 3,
    bathrooms: 4
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISbl25hgnizq1m0000000000.jpg',
    price: 'C$878,800',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISbl25hgnizq1m0000000000.jpg',
    address: '2111 Lake Shore Blvd W # 1117',
    zipcode: 'M8V4B2',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISn2cx63p2h8nu0000000000.jpg',
    price: 'C$400,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISn2cx63p2h8nu0000000000.jpg',
    address: 'Central 38 Widmer St',
    zipcode: 'M5V2E9',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 0,
    bathrooms: 0
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISrdzdlhb5m3xx0000000000.jpg',
    price: 'C$3,695,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISrdzdlhb5m3xx0000000000.jpg',
    address: '157 Princess Ave',
    zipcode: 'M2N3R8',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 6
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS7it0o4wt6kh01000000000.jpg',
    price: 'C$400,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS7it0o4wt6kh01000000000.jpg',
    address: 'Clonmore Urban Towns 168 Clonmore Dr',
    zipcode: 'M1N1Y1',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 0,
    bathrooms: 0
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISnudd6cc5xuga1000000000.jpg',
    price: 'C$449,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISnudd6cc5xuga1000000000.jpg',
    address: '2522 Keele St # 316',
    zipcode: 'M6L0A2',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 1,
    bathrooms: 1
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISzfe9cgslywqm1000000000.jpg',
    price: 'C$839,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISzfe9cgslywqm1000000000.jpg',
    address: '101 Peter St # 2309',
    zipcode: 'M5V0G6',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISjfbmqslm6e7s0000000000.jpg',
    price: 'C$1,099,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISjfbmqslm6e7s0000000000.jpg',
    address: '76 Lesgay Cres',
    zipcode: 'M2J2J3',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISrdrfdqrbbnsn0000000000.jpg',
    price: 'C$649,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISrdrfdqrbbnsn0000000000.jpg',
    address: '103 The Queensway # 1910',
    zipcode: 'M6S5B3',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISvwsodqwasioe1000000000.jpg',
    price: 'C$729,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISvwsodqwasioe1000000000.jpg',
    address: '311 Richmond St E # 203',
    zipcode: 'M5A4S8',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 3,
    bathrooms: 2
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISb9xgdhqrt9rq0000000000.jpg',
    price: 'C$3,688,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISb9xgdhqrt9rq0000000000.jpg',
    address: '352 Byng Ave',
    zipcode: 'M2N4L5',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 5,
    bathrooms: 6
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISz31var9ln6gl1000000000.jpg',
    price: 'C$1,289,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISz31var9ln6gl1000000000.jpg',
    address: '59 Jeavons Ave # B',
    zipcode: 'M1K1T1',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 6,
    bathrooms: 5
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISbhna88kute1l0000000000.jpg',
    price: 'C$599,988',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISbhna88kute1l0000000000.jpg',
    address: '40 Dundalk Dr # 52',
    zipcode: 'M1P4S3',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 5,
    bathrooms: 3
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/IS72pqcc0zbp5v1000000000.jpg',
    price: 'C$700,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/IS72pqcc0zbp5v1000000000.jpg',
    address: '138 Saint Helens Ave # 712',
    zipcode: 'M6H0B8',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 2,
    bathrooms: 1
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISnu5vyjcqhyf31000000000.jpg',
    price: 'C$2,768,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISnu5vyjcqhyf31000000000.jpg',
    address: '273 Manor Rd E',
    zipcode: 'M4S1S3',
    city: 'Toronto',
    state: 'ON',
    status: 'House for sale',
    bedrooms: 4,
    bathrooms: 5
  },
  {
    imgSrc: 'https://photos.zillowstatic.com/p_e/ISvwg3pjygeqdg0000000000.jpg',
    price: 'C$400,000',
    hiResImageSrc:
      'https://photos.zillowstatic.com/p_f/ISvwg3pjygeqdg0000000000.jpg',
    address: 'The Clair Residences',
    zipcode: 'M4T1Y7',
    city: 'Toronto',
    state: 'ON',
    status: 'Condo for sale',
    bedrooms: 0,
    bathrooms: 0
  }
];
