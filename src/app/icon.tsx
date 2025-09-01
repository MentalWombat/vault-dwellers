import { ImageResponse } from 'next/og';

export const contentType = 'image/png';

export const size = {
  width: 32,
  height: 32
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#065a07',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#12ff15'
        }}
      >
        VD
      </div>
    ),
    { ...size }
  );
}
