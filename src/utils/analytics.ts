enum ComponentType {
  unknown = 'unknown',
  banner = 'banner',
  button = 'button',
  card = 'card',
  chart = 'chart',
  content_script = 'content_script',
  dropdown = 'dropdown',
  link = 'link',
  page = 'page',
  modal = 'modal',
  table = 'table',
  search_bar = 'search_bar',
  service_worker = 'service_worker',
  text = 'text',
  text_input = 'text_input',
  tray = 'tray',
  checkbox = 'checkbox',
  icon = 'icon',
}

enum ActionType {
  unknown = 'unknown',
  blur = 'blur',
  click = 'click',
  change = 'change',
  dismiss = 'dismiss',
  focus = 'focus',
  hover = 'hover',
  select = 'select',
  measurement = 'measurement',
  move = 'move',
  process = 'process',
  render = 'render',
  scroll = 'scroll',
  view = 'view',
  search = 'search',
  keyPress = 'keyPress',
}

enum AnalyticsEventImportance {
  low = 'low',
  high = 'high',
}

type CCAEventData = {
  loggingId: string
  componentType: ComponentType
  action: ActionType
}

export type CCAEvent = {
  eventName: string
  eventData: CCAEventData
  importance?: AnalyticsEventImportance
}

export type LogEvent = (
  eventName: string,
  eventData: CCAEventData,
  importance?: AnalyticsEventImportance
) => void

declare global {
  interface Window {
    ClientAnalytics: {
      logEvent: LogEvent
    }
  }
}

export const events: Record<string, CCAEvent> = {
  nativeMintSuccess: {
    eventName: 'native_mint_success',
    eventData: {
      loggingId: 'c00b52de-1db1-44db-bde5-720a7a6d21bd',
      componentType: ComponentType.page,
      action: ActionType.change,
    },
    importance: AnalyticsEventImportance.high,
  },
  mintDotFunSuccess: {
    eventName: 'mint_dot_fun_success',
    eventData: {
      loggingId: '6a8b56b1-c20a-4579-9f80-10ebc09a0c86',
      componentType: ComponentType.page,
      action: ActionType.change,
    },
    importance: AnalyticsEventImportance.high,
  },
  crossMintSuccess: {
    eventName: 'cross_mint_success',
    eventData: {
      loggingId: 'd72a8780-c4ca-4977-bd99-0479b0b2eccb',
      componentType: ComponentType.page,
      action: ActionType.change,
    },
    importance: AnalyticsEventImportance.high,
  },
  bridgeStarted: {
    eventName: 'bridge_started',
    eventData: {
      loggingId: 'f00cd52d-68c3-451e-8ae3-78d2cf2fa757',
      componentType: ComponentType.page,
      action: ActionType.change,
    },
    importance: AnalyticsEventImportance.high,
  },
  bridgeSuccess: {
    eventName: 'bridge_success',
    eventData: {
      loggingId: '211fb8c6-cc70-40a9-8116-6afa6420bdd6',
      componentType: ComponentType.page,
      action: ActionType.change,
    },
    importance: AnalyticsEventImportance.high,
  },
  clientError: {
    eventName: 'client_error',
    eventData: {
      loggingId: 'c329a419-0bff-4347-8065-621c614e3b34',
      componentType: ComponentType.page,
      action: ActionType.unknown,
    },
    importance: AnalyticsEventImportance.high,
  },
}
