import axios, { AxiosError } from 'axios';

const AZURE_TRANSLATE_ENDPOINT = process.env.REACT_APP_AZURE_TRANSLATE_ENDPOINT;
const AZURE_TRANSLATE_KEY = process.env.REACT_APP_AZURE_TRANSLATE_KEY;
const AZURE_TRANSLATE_REGION = 'eastus'; // Make sure this matches your Azure resource's region

export async function translateText(text: string, from: string, to: string): Promise<string> {
  // Log configuration (safely)
  console.log('Azure Translate Configuration:');
  console.log('Endpoint:', AZURE_TRANSLATE_ENDPOINT ? 'Set' : 'Not set');
  console.log('Key:', AZURE_TRANSLATE_KEY ? `Set (length: ${AZURE_TRANSLATE_KEY.length})` : 'Not set');
  console.log('Region:', AZURE_TRANSLATE_REGION);

  try {
    const config = {
      baseURL: AZURE_TRANSLATE_ENDPOINT,
      url: '/translate',
      method: 'post',
      headers: {
        'Ocp-Apim-Subscription-Key': AZURE_TRANSLATE_KEY,
        'Ocp-Apim-Subscription-Region': AZURE_TRANSLATE_REGION,
        'Content-type': 'application/json',
      },
      params: {
        'api-version': '3.0',
        'from': from,
        'to': to,
      },
      data: [{
        'text': text
      }],
    };

    // Log request details (excluding the actual key)
    console.log('Request Configuration:');
    console.log('URL:', `${config.baseURL}${config.url}`);
    console.log('Method:', config.method);
    console.log('Headers:', {...config.headers, 'Ocp-Apim-Subscription-Key': '[REDACTED]'});
    console.log('Params:', config.params);
    console.log('Data:', config.data);

    const response = await axios(config);

    console.log('Response:', response.data);

    return response.data[0].translations[0].text;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error('Azure Translate API Error:');
      console.error('Status:', axiosError.response?.status);
      console.error('Status Text:', axiosError.response?.statusText);
      console.error('Data:', axiosError.response?.data);
      console.error('Headers:', axiosError.response?.headers);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}