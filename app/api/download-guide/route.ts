import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import path from 'path'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'guides', 'SAMA-NCA-Framework-Guide.pdf')
    const fileBuffer = readFileSync(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=SAMA-NCA-Framework-Guide.pdf',
      },
    })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      { error: 'File not found' },
      { status: 404 }
    )
  }
} 