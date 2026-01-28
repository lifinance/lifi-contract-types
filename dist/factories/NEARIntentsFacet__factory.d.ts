import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NEARIntentsFacet, NEARIntentsFacetInterface } from "../NEARIntentsFacet";
type NEARIntentsFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NEARIntentsFacet__factory extends ContractFactory {
    constructor(...args: NEARIntentsFacetConstructorParams);
    deploy(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NEARIntentsFacet>;
    getDeployTransaction(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NEARIntentsFacet;
    connect(signer: Signer): NEARIntentsFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620024c5380380620024c583398101604081905262000034916200006e565b6001600160a01b0381166200005c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052620000a0565b6000602082840312156200008157600080fd5b81516001600160a01b03811681146200009957600080fd5b9392505050565b608051612409620000bc6000396000610af101526124096000f3fe6080604052600436106100345760003560e01c80633110c7b9146100395780635cf8113b1461004e578063cc67a1aa14610061575b600080fd5b61004c610047366004611ee0565b6100c4565b005b61004c61005c366004611f9f565b61046b565b34801561006d57600080fd5b506100b061007c36600461200c565b60009081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e602052604090205460ff1690565b604051901515815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161013f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155848260007fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e60408084013560009081526020839052205490915060ff16156101b7576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81606001354211156101f5576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561023157508135155b15610268576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3360006102753447612054565b9050898061010001516102b4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a806101200151156102f2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6103158160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561034c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361038a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103c7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103d18d8b6107f4565b60006103e88e600001518f60c001518f8f33610b7c565b90508d60c0015181111561042d5760008e60c00151826104089190612054565b905061042b8f608001518d60a00160208101906104259190612067565b83610cc3565b505b6104378e8c610cf8565b5047925050508181111561045a5761045a6000846104558585612054565b610cc3565b505060009094555050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104e6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556104f383612089565b8260007fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e60408084013560009081526020839052205490915060ff1615610566576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81606001354211156105a4576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480156105e057508135155b15610617576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3360006106243447612054565b905061062f88612089565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610680576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036106be576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106fb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61070489612089565b80610100015115610741576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61074a8a612089565b80610120015115610787576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107996107938c612089565b8b6107f4565b6107b66107ac60a08d0160808e01612067565b8c60c00135610ec4565b6107c86107c28c612089565b8b610cf8565b5047915050818111156107e5576107e56000846104558585612054565b50506000909455505050505050565b60a082015160009073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11461084c5760a083015173ffffffffffffffffffffffffffffffffffffffff1661084f565b81355b835160c08501519192506000917f26e3f312476209e792e713eef13bd95c5da5292aba26e299c7d8e7c647d7903e9190846108906040880160208901612067565b60e0808a01516080808c015160408051602081019a909a52898101989098526060898101979097528882019590955273ffffffffffffffffffffffffffffffffffffffff93841660a089015260c088019190915291909216918501919091529086013561010084015290850135610120830152840135610140820152610160016040516020818303038152906040528051906020012090506000610a2d604080518082018252601881527f4c492e4649204e45415220496e74656e7473204661636574000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fdf98a75ee2bb051a05361ac569745cad98c226712c281987cdb39642864489ae818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090506000610aed82610ab360c0880188612095565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610f7992505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b74576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b600082808203610bb8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610bc7600185612054565b818110610bd657610bd6612101565b9050602002810190610be89190612130565b610bf9906080810190606001612067565b90506000610c0682611023565b905073ffffffffffffffffffffffffffffffffffffffff8216610c3057610c2d3482612054565b90505b6000610c3c888861106e565b9050610c488888611182565b610c558a898989856111ef565b600082610c6185611023565b610c6b9190612054565b905089811015610cb5576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ced57610ce8828261143c565b505050565b610ce88383836114a9565b6040818101803560009081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e60208181529390912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560808501519092610d7792610d6d918601612067565b8560c00151610cc3565b610d876040830160208401612067565b835160808086015160c08701516040805173ffffffffffffffffffffffffffffffffffffffff93841681526020810192909252606080890135838301528489013590830152949091169386013592917f58a66541dad6964200edd2115c2567d5b7d9d86a45b0df488d6506d2a41e248d910160405180910390a47311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610e885760e08301518351604051843581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610eb791906121d2565b60405180910390a1505050565b80600003610efe576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f575780341015610f53576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610f5373ffffffffffffffffffffffffffffffffffffffff8316333084611517565b6040516001908360005260208301516040526040835103610fce57604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610ff4565b6041835103610fef57606083015160001a6020526040830151606052610ff4565b600091505b6020600160806000855afa5191503d61101557638baa579f6000526004601cfd5b600060605260405292915050565b600073ffffffffffffffffffffffffffffffffffffffff8216156110665761106173ffffffffffffffffffffffffffffffffffffffff831630611574565b611068565b475b92915050565b60608160008167ffffffffffffffff81111561108c5761108c611ca6565b6040519080825280602002602001820160405280156110b5578160200160208202803683370190505b5090506000805b83811015611177578686828181106110d6576110d6612101565b90506020028101906110e89190612130565b6110f9906080810190606001612067565b915061110482611023565b83828151811061111657611116612101565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611167573483828151811061114f5761114f612101565b602002602001018181516111639190612054565b9052505b611170816122e5565b90506110bc565b509095945050505050565b60005b81811015610ce857368383838181106111a0576111a0612101565b90506020028101906111b29190612130565b90506111c460e0820160c0830161231d565b156111e6576111e66111dc6060830160408401612067565b8260800135610ec4565b50600101611185565b8383838382600080805b8381101561141f57368c8c8381811061121457611214612101565b90506020028101906112269190612130565b90506112356020820182612067565b93506112476040820160208301612067565b92506112ec8461125a60a0840184612095565b61126991600491600091612338565b61127291612362565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806113d557506113206113066060830160408401612067565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561135957508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b80156113d5575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561140c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114168e826115a9565b506001016111f9565b50505050611431848484846000611826565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611489576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f5373ffffffffffffffffffffffffffffffffffffffff831682611a4c565b73ffffffffffffffffffffffffffffffffffffffff82166114f6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ce873ffffffffffffffffffffffffffffffffffffffff84168383611a68565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661156657637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6115c16115b96020830183612067565b6017903b1190565b6115f7576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611637576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061164c6113066060850160408601612067565b61165757600061165d565b82608001355b905060006116796116746080860160608701612067565b611023565b9050816000036116b0576116b06116966060860160408701612067565b6116a66040870160208801612067565b8660800135611ab7565b6000806116c06020870187612067565b73ffffffffffffffffffffffffffffffffffffffff16846116e460a0890189612095565b6040516116f29291906123aa565b60006040518083038185875af1925050503d806000811461172f576040519150601f19603f3d011682016040523d82523d6000602084013e611734565b606091505b5091509150816117475761174781611ae3565b600061175c6116746080890160608a01612067565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861178d60208a018a612067565b61179d60608b0160408c01612067565b6117ad60808c0160608d01612067565b8b608001358987116117bf57866117c9565b6117c98a88612054565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b8360008682611836600182612054565b81811061184557611845612101565b90506020028101906118579190612130565b611868906080810190606001612067565b905060008060008060008060005b88811015611a3c5761188960018a612054565b81108015611898575088600114155b15611974578d8d828181106118af576118af612101565b90506020028101906118c19190612130565b6118d2906080810190606001612067565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611974578a818151811061191957611919612101565b602002602001015161192a87611023565b6119349190612054565b965073ffffffffffffffffffffffffffffffffffffffff86161561195957600061195b565b895b93508387111561197457611974868d610455878b612054565b8d8d8281811061198657611986612101565b90506020028101906119989190612130565b6119a9906060810190604001612067565b94506119b485611023565b925073ffffffffffffffffffffffffffffffffffffffff8516156119d95760006119db565b895b91508183118015611a1857508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611a2c57611a2c858d6104558587612054565b611a35816122e5565b9050611876565b5050505050505050505050505050565b60003860003884865af1610f535763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611aad576390b8ec186000526004601cfd5b6000603452505050565b610ce88383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611aed565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611c165773ffffffffffffffffffffffffffffffffffffffff8316611b56576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611bcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bef91906123ba565b1015611c1657611c1673ffffffffffffffffffffffffffffffffffffffff85168483611c1c565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611aad5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611aad57633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611cf957611cf9611ca6565b60405290565b600082601f830112611d1057600080fd5b813567ffffffffffffffff80821115611d2b57611d2b611ca6565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611d7157611d71611ca6565b81604052838152866020858801011115611d8a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611dce57600080fd5b919050565b80358015158114611dce57600080fd5b60006101408284031215611df657600080fd5b611dfe611cd5565b905081358152602082013567ffffffffffffffff80821115611e1f57600080fd5b611e2b85838601611cff565b60208401526040840135915080821115611e4457600080fd5b50611e5184828501611cff565b604083015250611e6360608301611daa565b6060820152611e7460808301611daa565b6080820152611e8560a08301611daa565b60a082015260c082013560c082015260e082013560e0820152610100611eac818401611dd3565b90820152610120611ebe838201611dd3565b9082015292915050565b600060e08284031215611eda57600080fd5b50919050565b60008060008060608587031215611ef657600080fd5b843567ffffffffffffffff80821115611f0e57600080fd5b611f1a88838901611de3565b95506020870135915080821115611f3057600080fd5b818701915087601f830112611f4457600080fd5b813581811115611f5357600080fd5b8860208260051b8501011115611f6857600080fd5b602083019550809450506040870135915080821115611f8657600080fd5b50611f9387828801611ec8565b91505092959194509250565b60008060408385031215611fb257600080fd5b823567ffffffffffffffff80821115611fca57600080fd5b908401906101408287031215611fdf57600080fd5b90925060208401359080821115611ff557600080fd5b5061200285828601611ec8565b9150509250929050565b60006020828403121561201e57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561106857611068612025565b60006020828403121561207957600080fd5b61208282611daa565b9392505050565b60006110683683611de3565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126120ca57600080fd5b83018035915067ffffffffffffffff8211156120e557600080fd5b6020019150368190038213156120fa57600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261216457600080fd5b9190910192915050565b6000815180845260005b8181101561219457602081850181015186830182015201612178565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815281516020820152600060208301516101408060408501526121fb61016085018361216e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612236838261216e565b9250506060850151612260608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206122d38187018315159052565b90950151151593019290925250919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361231657612316612025565b5060010190565b60006020828403121561232f57600080fd5b61208282611dd3565b6000808585111561234857600080fd5b8386111561235557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156123a25780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156123cc57600080fd5b505191905056fea264697066735822122039a78357579950de1710cf3e9d967c89fd8567f9269f0bf753aec784383cde9964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_backendSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isQuoteConsumed";
        readonly inputs: readonly [{
            readonly name: "_quoteId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "consumed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaNEARIntents";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_nearData";
            readonly type: "tuple";
            readonly internalType: "struct NEARIntentsFacet.NEARIntentsData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaNEARIntents";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_nearData";
            readonly type: "tuple";
            readonly internalType: "struct NEARIntentsFacet.NEARIntentsData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "NEARIntentsBridgeStarted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "quoteId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "depositAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "minAmountOut";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSignature";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QuoteAlreadyConsumed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QuoteExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): NEARIntentsFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NEARIntentsFacet;
}
export {};
