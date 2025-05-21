import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacet, HopFacetInterface } from "../HopFacet";
declare type HopFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HopFacet__factory extends ContractFactory {
    constructor(...args: HopFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HopFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HopFacet;
    connect(signer: Signer): HopFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612291806100206000396000f3fe60806040526004361061003f5760003560e01c80633961d1ed1461004457806367fdd71e14610066578063a01fe78414610086578063b3b6358714610099575b600080fd5b34801561005057600080fd5b5061006461005f366004611a89565b6100ac565b005b34801561007257600080fd5b50610064610081366004611abc565b6101ad565b610064610094366004611d43565b610356565b6100646100a7366004611df0565b61058d565b6100b46107b1565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b873ffffffffffffffffffffffffffffffffffffffff8216610122576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b6101b56107b1565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b860005b828110156103175760008484838181106101f5576101f5611e37565b905060400201602001602081019061020d9190611e66565b73ffffffffffffffffffffffffffffffffffffffff160361025a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061026c5761026c611e37565b90506040020160200160208101906102849190611e66565b82600086868581811061029957610299611e37565b6102af9260206040909202019081019150611e66565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790558061030f81611eb7565b9150506101d9565b507f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde38383604051610349929190611eef565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103e23447611f5e565b905086806101000151610421576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561045f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610534576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054e8a600001518b60c001518b8b338c60e00135610826565b60c08b015261055d8a886109c6565b50479150508181111561057f5761057f60008461057a8585611f5e565b610c87565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610608576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006106193447611f5e565b90508480610100015115610659576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610697576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106ba8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106f1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361072f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361076c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077e88608001518960c00151610cbc565b61078888886109c6565b5047915050818111156107a5576107a560008461057a8585611f5e565b50506000909155505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610824576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600083808203610862576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610871600185611f5e565b81811061088057610880611e37565b90506020028101906108929190611f71565b6108a3906080810190606001611e66565b905060006108b082610d71565b905073ffffffffffffffffffffffffffffffffffffffff82166108da576108d73482611f5e565b90505b60006108e68989610dbc565b90506108f28989610ec8565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261092d818b8b85610f35565b60008361093986610d71565b6109439190611f5e565b905073ffffffffffffffffffffffffffffffffffffffff851661096d5761096a8882611f5e565b90505b8b8110156109b6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff80821660008181527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b860208190526040909120549092169015610a2c57610a2c83828760c00151611326565b600073ffffffffffffffffffffffffffffffffffffffff841615610a54578460e00135610a67565b60c0860151610a679060e0870135611faf565b90504660011480610a785750466005145b15610b76578173ffffffffffffffffffffffffffffffffffffffff1663deace8f5828860e001518960a001518a60c001518a606001358b608001358c60a0016020810190610ac69190611e66565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019690965273ffffffffffffffffffffffffffffffffffffffff94851660248701526044860193909352606485019190915260848401521660a482015260c089013560c482015260e4016000604051808303818588803b158015610b5857600080fd5b505af1158015610b6c573d6000803e3d6000fd5b5050505050610c48565b60e086015160a087015160c0880151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152873560648401526020880135608484015287013560a4830152606087013560c4830152608087013560e483015283169063eea0d7b2908390610104016000604051808303818588803b158015610c2e57600080fd5b505af1158015610c42573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610c779190612026565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cb157610cac8282611352565b505050565b610cac8383836113bf565b80600003610cf6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d4f5780341015610d4b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610d4b73ffffffffffffffffffffffffffffffffffffffff831633308461142d565b600073ffffffffffffffffffffffffffffffffffffffff821615610db457610daf73ffffffffffffffffffffffffffffffffffffffff83163061148a565b610db6565b475b92915050565b60608160008167ffffffffffffffff811115610dda57610dda611b31565b604051908082528060200260200182016040528015610e03578160200160208202803683370190505b5090506000805b83811015610ebd57868682818110610e2457610e24611e37565b9050602002810190610e369190611f71565b610e47906080810190606001611e66565b9150610e5282610d71565b838281518110610e6457610e64611e37565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610eb55734838281518110610e9d57610e9d611e37565b60200260200101818151610eb19190611f5e565b9052505b600101610e0a565b509095945050505050565b60005b81811015610cac5736838383818110610ee657610ee6611e37565b9050602002810190610ef89190611f71565b9050610f0a60e0820160c08301612139565b15610f2c57610f2c610f226060830160408401611e66565b8260800135610cbc565b50600101610ecb565b60208401516040850151849184918490836001811461123f5760008686610f5d600185611f5e565b818110610f6c57610f6c611e37565b9050602002810190610f7e9190611f71565b610f8f906080810190606001611e66565b9050600089815b8181101561113c57368d8d83818110610fb157610fb1611e37565b9050602002810190610fc39190611f71565b9050610ff2610fd86060830160408401611e66565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611055575061105561100b6040830160208401611e66565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561106c575061106c61100b6020830183611e66565b80156110f157506110f161108360a0830183612154565b611092916004916000916121c0565b61109b916121ea565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611127576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e5161113390826114bf565b50600101610f96565b505060005b61114c600185611f5e565b81101561123757600089898381811061116757611167611e37565b90506020028101906111799190611f71565b61118a906080810190606001611e66565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461122e578682815181106111d1576111d1611e37565b60200260200101516111e282610d71565b6111ec9190611f5e565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611213576000611215565b865b9050831561122c5761122c828a61057a8488611f5e565b505b50600101611141565b50505061131a565b8760005b8181101561131757368b8b8381811061125e5761125e611e37565b90506020028101906112709190611f71565b9050611285610fd86060830160408401611e66565b8061129e575061129e61100b6040830160208401611e66565b80156112b557506112b561100b6020830183611e66565b80156112cc57506112cc61108360a0830183612154565b611302576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161130e90826114bf565b50600101611243565b50505b50505050505050505050565b610cac8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61179c565b73ffffffffffffffffffffffffffffffffffffffff821661139f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d4b73ffffffffffffffffffffffffffffffffffffffff8316826118cb565b73ffffffffffffffffffffffffffffffffffffffff821661140c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cac73ffffffffffffffffffffffffffffffffffffffff841683836118e7565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661147c57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6114d46114cf6020830183611e66565b611936565b61150a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361154a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061155f610fd86060850160408601611e66565b61156a576000611570565b82608001355b9050600061158c6115876060860160408701611e66565b610d71565b905060006115a36115876080870160608801611e66565b9050826000036115da576115da6115c06060870160408801611e66565b6115d06040880160208901611e66565b8760800135611326565b8460800135821015611625576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016109ad565b6000806116356020880188611e66565b73ffffffffffffffffffffffffffffffffffffffff168561165960a08a018a612154565b604051611667929190612232565b60006040518083038185875af1925050503d80600081146116a4576040519150601f19603f3d011682016040523d82523d6000602084013e6116a9565b606091505b5091509150816116bc576116bc816119cc565b60006116d161158760808a0160608b01611e66565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961170260208b018b611e66565b61171260608c0160408d01611e66565b61172260808d0160608e01611e66565b8c60800135898711611734578661173e565b61173e8a88611f5e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156118c55773ffffffffffffffffffffffffffffffffffffffff8316611805576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561187a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189e9190612242565b10156118c5576118c573ffffffffffffffffffffffffffffffffffffffff851684836119d6565b50505050565b60003860003884865af1610d4b5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171661192c576390b8ec186000526004601cfd5b6000603452505050565b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008216016119c357506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d15600160005114171661192c5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661192c57633e3f8f736000526004601cfd5b803573ffffffffffffffffffffffffffffffffffffffff81168114611a8457600080fd5b919050565b60008060408385031215611a9c57600080fd5b611aa583611a60565b9150611ab360208401611a60565b90509250929050565b60008060208385031215611acf57600080fd5b823567ffffffffffffffff80821115611ae757600080fd5b818501915085601f830112611afb57600080fd5b813581811115611b0a57600080fd5b8660208260061b8501011115611b1f57600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611b8457611b84611b31565b60405290565b600082601f830112611b9b57600080fd5b813567ffffffffffffffff80821115611bb657611bb6611b31565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611bfc57611bfc611b31565b81604052838152866020858801011115611c1557600080fd5b836020870160208301376000602085830101528094505050505092915050565b80358015158114611a8457600080fd5b60006101408284031215611c5857600080fd5b611c60611b60565b905081358152602082013567ffffffffffffffff80821115611c8157600080fd5b611c8d85838601611b8a565b60208401526040840135915080821115611ca657600080fd5b50611cb384828501611b8a565b604083015250611cc560608301611a60565b6060820152611cd660808301611a60565b6080820152611ce760a08301611a60565b60a082015260c082013560c082015260e082013560e0820152610100611d0e818401611c35565b90820152610120611d20838201611c35565b9082015292915050565b60006101008284031215611d3d57600080fd5b50919050565b6000806000806101408587031215611d5a57600080fd5b843567ffffffffffffffff80821115611d7257600080fd5b611d7e88838901611c45565b95506020870135915080821115611d9457600080fd5b818701915087601f830112611da857600080fd5b813581811115611db757600080fd5b8860208260051b8501011115611dcc57600080fd5b602083019550809450505050611de58660408701611d2a565b905092959194509250565b6000806101208385031215611e0457600080fd5b823567ffffffffffffffff811115611e1b57600080fd5b611e2785828601611c45565b925050611ab38460208501611d2a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611e7857600080fd5b611e8182611a60565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611ee857611ee8611e88565b5060010190565b6020808252818101839052600090604080840186845b87811015611f515773ffffffffffffffffffffffffffffffffffffffff80611f2c84611a60565b16845280611f3b878501611a60565b1684870152509183019190830190600101611f05565b5090979650505050505050565b81810381811115610db657610db6611e88565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611fa557600080fd5b9190910192915050565b80820180821115610db657610db6611e88565b6000815180845260005b81811015611fe857602081850181015186830182015201611fcc565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201526000602083015161014080604085015261204f610160850183611fc2565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261208a8382611fc2565b92505060608501516120b4608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206121278187018315159052565b90950151151593019290925250919050565b60006020828403121561214b57600080fd5b611e8182611c35565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261218957600080fd5b83018035915067ffffffffffffffff8211156121a457600080fd5b6020019150368190038213156121b957600080fd5b9250929050565b600080858511156121d057600080fd5b838611156121dd57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561222a5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561225457600080fd5b505191905056fea2646970667358221220c97cf2d0cc974ea8ac9305444bac81d0d63bdbe5fce2f353792dcdc0ad2ea7c164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initHop";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly internalType: "struct HopFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerBridge";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHop";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacet.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHop";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacet.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "HopBridgeRegistered";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "HopInitialized";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct HopFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): HopFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacet;
}
export {};
