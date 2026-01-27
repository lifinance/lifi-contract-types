import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiIntentEscrowFacet, LiFiIntentEscrowFacetInterface } from "../LiFiIntentEscrowFacet";
type LiFiIntentEscrowFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiIntentEscrowFacet__factory extends ContractFactory {
    constructor(...args: LiFiIntentEscrowFacetConstructorParams);
    deploy(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiIntentEscrowFacet>;
    getDeployTransaction(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiIntentEscrowFacet;
    connect(signer: Signer): LiFiIntentEscrowFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620023b8380380620023b883398101604081905262000034916200006e565b6001600160a01b0381166200005c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052620000a0565b6000602082840312156200008157600080fd5b81516001600160a01b03811681146200009957600080fd5b9392505050565b6080516122ef620000c960003960008181604b015281816108800152610a9b01526122ef6000f3fe6080604052600436106100345760003560e01c80631fe5bb31146100395780635627b1f31461009657806393057564146100ab575b600080fd5b34801561004557600080fd5b5061006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a96100a4366004611bac565b6100cb565b005b3480156100b757600080fd5b506100a96100c6366004611c6b565b610337565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610146576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080850151859073ffffffffffffffffffffffffffffffffffffffff1661019d576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3360006101aa3447611cfe565b9050878061010001516101e9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861020c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610243576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610281576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102be576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006102d58b600001518c60c001518c8c33610544565b90508a60c00151811115610301576103018b60800151338d60c00151846102fc9190611cfe565b61068b565b61030b8b896106c0565b504791505081811115610328576103286000846102fc8585611cfe565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080830151839073ffffffffffffffffffffffffffffffffffffffff16610409576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8361042c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610463576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104a1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104de576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061010001511561051c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052e86608001518760c00151610c1b565b61053886866106c0565b50506000909155505050565b600082808203610580576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561058f600185611cfe565b81811061059e5761059e611d11565b90506020028101906105b09190611d40565b6105c1906080810190606001611d7e565b905060006105ce82610cd0565b905073ffffffffffffffffffffffffffffffffffffffff82166105f8576105f53482611cfe565b90505b60006106048888610d1b565b90506106108888610e2f565b61061d8a89898985610e9c565b60008261062985610cd0565b6106339190611cfe565b90508981101561067d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166106b5576106b082826110e9565b505050565b6106b0838383611156565b610120820151151560006106d8610140840184611da0565b905011151514610714576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff81167311f111f111f111f111f111f111f111f111f111f11461079a57813573ffffffffffffffffffffffffffffffffffffffff82161461079a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006107ac6040840160208501611d7e565b73ffffffffffffffffffffffffffffffffffffffff16036107f9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8135610831576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816101200135600003610870576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015160c08401516108a5827f0000000000000000000000000000000000000000000000000000000000000000836111c4565b604080516001808252818301909252600091816020015b6108c4611953565b8152602001906001900390816108bc57905050905060405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001838152508160008151811061091757610917611d11565b6020908102919091010152604080516001808252818301909252600091816020015b60408051610100810182526000808252602080830182905292820181905260608083018290526080830182905260a083019190915260c0820181905260e082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90920191018161093957505060408051610100808201835260c0808b0135835260e0808c013560208501528c01519383019390935289013560608201526101208901356080820152883560a082015291925081016109ff610140890189611da0565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250602001610a47610160890189611da0565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509390945250508351849250610a8e57610a8e611d11565b60200260200101819052507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637515fd56604051806101000160405280896020016020810190610af49190611d7e565b73ffffffffffffffffffffffffffffffffffffffff16815260200189604001358152602001468152602001896060016020810190610b329190611e0c565b63ffffffff168152602001610b4d60a08b0160808c01611e0c565b63ffffffff168152602001610b6860c08b0160a08c01611d7e565b73ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152506040518263ffffffff1660e01b8152600401610ba99190611fd5565b600060405180830381600087803b158015610bc357600080fd5b505af1158015610bd7573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f187604051610c0a91906120b8565b60405180910390a150505050505050565b80600003610c55576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cae5780341015610caa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610caa73ffffffffffffffffffffffffffffffffffffffff83163330846111f0565b600073ffffffffffffffffffffffffffffffffffffffff821615610d1357610d0e73ffffffffffffffffffffffffffffffffffffffff83163061124d565b610d15565b475b92915050565b60608160008167ffffffffffffffff811115610d3957610d39611971565b604051908082528060200260200182016040528015610d62578160200160208202803683370190505b5090506000805b83811015610e2457868682818110610d8357610d83611d11565b9050602002810190610d959190611d40565b610da6906080810190606001611d7e565b9150610db182610cd0565b838281518110610dc357610dc3611d11565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e145734838281518110610dfc57610dfc611d11565b60200260200101818151610e109190611cfe565b9052505b610e1d816121cb565b9050610d69565b509095945050505050565b60005b818110156106b05736838383818110610e4d57610e4d611d11565b9050602002810190610e5f9190611d40565b9050610e7160e0820160c08301612203565b15610e9357610e93610e896060830160408401611d7e565b8260800135610c1b565b50600101610e32565b8383838382600080805b838110156110cc57368c8c83818110610ec157610ec1611d11565b9050602002810190610ed39190611d40565b9050610ee26020820182611d7e565b9350610ef46040820160208301611d7e565b9250610f9984610f0760a0840184611da0565b610f169160049160009161221e565b610f1f91612248565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806110825750610fcd610fb36060830160408401611d7e565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561100657508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611082575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156110b9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110c38e82611282565b50600101610ea6565b505050506110de8484848460006114ff565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611136576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610caa73ffffffffffffffffffffffffffffffffffffffff831682611725565b73ffffffffffffffffffffffffffffffffffffffff82166111a3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106b073ffffffffffffffffffffffffffffffffffffffff84168383611741565b6106b08383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611790565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661123f57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61129a6112926020830183611d7e565b6017903b1190565b6112d0576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611310576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611325610fb36060850160408601611d7e565b611330576000611336565b82608001355b9050600061135261134d6080860160608701611d7e565b610cd0565b9050816000036113895761138961136f6060860160408701611d7e565b61137f6040870160208801611d7e565b86608001356111c4565b6000806113996020870187611d7e565b73ffffffffffffffffffffffffffffffffffffffff16846113bd60a0890189611da0565b6040516113cb929190612290565b60006040518083038185875af1925050503d8060008114611408576040519150601f19603f3d011682016040523d82523d6000602084013e61140d565b606091505b50915091508161142057611420816118bf565b600061143561134d6080890160608a01611d7e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861146660208a018a611d7e565b61147660608b0160408c01611d7e565b61148660808c0160608d01611d7e565b8b6080013589871161149857866114a2565b6114a28a88611cfe565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b836000868261150f600182611cfe565b81811061151e5761151e611d11565b90506020028101906115309190611d40565b611541906080810190606001611d7e565b905060008060008060008060005b888110156117155761156260018a611cfe565b81108015611571575088600114155b1561164d578d8d8281811061158857611588611d11565b905060200281019061159a9190611d40565b6115ab906080810190606001611d7e565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461164d578a81815181106115f2576115f2611d11565b602002602001015161160387610cd0565b61160d9190611cfe565b965073ffffffffffffffffffffffffffffffffffffffff861615611632576000611634565b895b93508387111561164d5761164d868d6102fc878b611cfe565b8d8d8281811061165f5761165f611d11565b90506020028101906116719190611d40565b611682906060810190604001611d7e565b945061168d85610cd0565b925073ffffffffffffffffffffffffffffffffffffffff8516156116b25760006116b4565b895b915081831180156116f157508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561170557611705858d6102fc8587611cfe565b61170e816121cb565b905061154f565b5050505050505050505050505050565b60003860003884865af1610caa5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611786576390b8ec186000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff8416156118b95773ffffffffffffffffffffffffffffffffffffffff83166117f9576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561186e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189291906122a0565b10156118b9576118b973ffffffffffffffffffffffffffffffffffffffff851684836118c9565b50505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166117865760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661178657633e3f8f736000526004601cfd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156119c4576119c4611971565b60405290565b600082601f8301126119db57600080fd5b813567ffffffffffffffff808211156119f6576119f6611971565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611a3c57611a3c611971565b81604052838152866020858801011115611a5557600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611a9957600080fd5b919050565b80358015158114611a9957600080fd5b60006101408284031215611ac157600080fd5b611ac96119a0565b905081358152602082013567ffffffffffffffff80821115611aea57600080fd5b611af6858386016119ca565b60208401526040840135915080821115611b0f57600080fd5b50611b1c848285016119ca565b604083015250611b2e60608301611a75565b6060820152611b3f60808301611a75565b6080820152611b5060a08301611a75565b60a082015260c082013560c082015260e082013560e0820152610100611b77818401611a9e565b90820152610120611b89838201611a9e565b9082015292915050565b60006101808284031215611ba657600080fd5b50919050565b60008060008060608587031215611bc257600080fd5b843567ffffffffffffffff80821115611bda57600080fd5b611be688838901611aae565b95506020870135915080821115611bfc57600080fd5b818701915087601f830112611c1057600080fd5b813581811115611c1f57600080fd5b8860208260051b8501011115611c3457600080fd5b602083019550809450506040870135915080821115611c5257600080fd5b50611c5f87828801611b93565b91505092959194509250565b60008060408385031215611c7e57600080fd5b823567ffffffffffffffff80821115611c9657600080fd5b611ca286838701611aae565b93506020850135915080821115611cb857600080fd5b50611cc585828601611b93565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610d1557610d15611ccf565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611d7457600080fd5b9190910192915050565b600060208284031215611d9057600080fd5b611d9982611a75565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611dd557600080fd5b83018035915067ffffffffffffffff821115611df057600080fd5b602001915036819003821315611e0557600080fd5b9250929050565b600060208284031215611e1e57600080fd5b813563ffffffff81168114611d9957600080fd5b60008151808452602080850194508084016000805b84811015611e8757825188835b6002811015611e7157825182529186019190860190600101611e54565b5050506040979097019691830191600101611e47565b50959695505050505050565b6000815180845260005b81811015611eb957602081850181015186830182015201611e9d565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600082825180855260208086019550808260051b84010181860160005b84811015611fc8578583037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018952815180518452848101518585015260408082015190850152606080820151908501526080808201519085015260a0808201519085015260c0808201516101008287018190529190611f9683880182611e93565b9250505060e08083015192508582038187015250611fb48183611e93565b9a86019a9450505090830190600101611f14565b5090979650505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff8251166020820152602082015160408201526040820151606082015260006060830151612023608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c08301516101008060e0850152612074610120850183611e32565b915060e08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301828601526120ae8382611ef7565b9695505050505050565b6020815281516020820152600060208301516101408060408501526120e1610160850183611e93565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261211c8382611e93565b9250506060850151612146608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206121b98187018315159052565b90950151151593019290925250919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036121fc576121fc611ccf565b5060010190565b60006020828403121561221557600080fd5b611d9982611a9e565b6000808585111561222e57600080fd5b8386111561223b57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156122885780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156122b257600080fd5b505191905056fea2646970667358221220ac46091669abf2f3843350ae1dd0b3baf63139b5e606f8d39a312652fa5dff3464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_inputSettler";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_INTENT_ESCROW_SETTLER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaLiFiIntentEscrow";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacet.LiFiIntentEscrowData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputCall";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "outputContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLiFiIntentEscrow";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacet.LiFiIntentEscrowData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputCall";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "outputContext";
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): LiFiIntentEscrowFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiIntentEscrowFacet;
}
export {};
