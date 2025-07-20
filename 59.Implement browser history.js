class BrowserHistory {
    /**
   * @param {string} url
   * if url is set, it means new tab with url
   * otherwise, it is empty new tab
   */

    constructor(url) {
        this.currentTab = url ? {
            prev: null,
            next: null,
            value: url
        }: {
            prev: null,
            next: null,
            value: null
        };
    }
    /**
   * @param { string } url
   */
    visit(url) {
        let prevNode = this.currentTab;
        prevNode.next = {
            prev: prevNode,
            next: null,
            value: url,
        };
        this.currentTab = prevNode.next;
    }

    /**
   * @return {string} current url
   */
    get current() {
        return this.currentTab.value ? ?undefined;
    }

    // go to previous entry
    goBack() {
        // 
        if (!this.currentTab.prev) return;
        this.currentTab = this.currentTab.prev;
    }

    // go to next visited url
    forward() {

        if (!this.currentTab.next) return;

        this.currentTab = this.currentTab.next;
    }
}
