import { registerOTel } from '@vercel/otel';
 
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";

export function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
  registerOTel({ 
    serviceName: 'securerpc-www',
    spanProcessors: [new SimpleSpanProcessor(new OTLPTraceExporter())],
});
}
};